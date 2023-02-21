import { useRef, useCallback } from "react";
import Post from "../Post/Post";
import { useInfiniteQuery } from "react-query";
import { getPostsPage } from "../../api/axios";
import "./Scroll.css";

const Scroll = () => {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    status,
    error,
  } = useInfiniteQuery(
    "/posts",
    ({ pageParam = 0 }) => getPostsPage(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.results.length ? allPages.length + 1 : undefined;
      },
    }
  );

  console.log(isFetchingNextPage);

  const intObserver = useRef();

  const lastPostRef = useCallback(
    (post) => {
      if (isFetchingNextPage) return;

      if (intObserver.current) {
        intObserver.current.disconnect();
      }

      intObserver.current = new IntersectionObserver(async (posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log(hasNextPage);
          console.log("We are near the last post!");

          function delay(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
          }

          delay(1000).then((resolve) => fetchNextPage());
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (status === "error")
    return <p className="center">Error: {error.message}</p>;

  let response = data?.pages.map((pg) => {
    return pg.results.map((res, i) => {
      if (pg.results.length === i + 1) {
        return (
          <Post
            ref={lastPostRef}
            key={res.login.uuid}
            name={res.name.first}
            image={res.picture.large}
          />
        );
      }
      return (
        <Post
          key={res.login.uuid}
          name={res.name.first}
          image={res.picture.large}
        />
      );
    });
  });

  return (
    <>
      <div id="top"></div>
      <div className="post">{response}</div>

      {isFetchingNextPage && <p className="loading">Loading....</p>}
      <p className="center">
        <a href="#top" className="top">
          Top
        </a>
      </p>
    </>
  );
};
export default Scroll;
