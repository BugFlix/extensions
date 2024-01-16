import React, { useState, useRef } from "react";
import "./postpreview.css";
import Collection2 from "../images/multiple.png";
import PostDetail from "../pages/postDetail";
import api from "../config/apiConfig";
import likeImg from "../images/likestar.png";
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "ko-KR",
    options
  );
  return formattedDate;
};

const formatRelativeTime = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const diff = now - date;

  // 분, 시간, 일로 계산
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) {
    return "방금 전";
  } else if (minutes < 60) {
    return `${minutes}분 전`;
  } else if (hours < 24) {
    return `${hours}시간 전`;
  } else if (days < 7) {
    return `${days}일 전`;
  } else {
    return formatDate(dateString);
  }
};

const PostPreview = ({ dataPost }) => {
  const collection1Ref = useRef();
  const collection2Ref = useRef();
  const [collection, selectCollection] = useState("collect1column");
  const [showPost, setShowPost] = useState(false);
  const [dataPostDetail, setDataPostDetail] = useState();
  const accessToken = localStorage.getItem("accesstoken");

  const handleCollection = (prev) => {
    selectCollection((prevCollection) =>
      prevCollection === "collect1column" ? "collect2coloumn" : "collect1column"
    );
  };
  const getPreviewBoxStyle = () => {
    if (collection === "collect2coloumn") {
      return {
        width: "125px",
        height: "125px",
        marginLeft: "15px",
      };
    }
    return {};
  };
  const getRecommendBox = () => {
    if (collection === "collect2coloumn") {
      return {
        marginTop: "92.5px",
        marginLeft: "92.5px",
        width: "19px",
        height: "19px",
      };
    }
  };
  const getImageBox = () => {
    if (collection === "collect2coloumn") {
      return {
        marginTop: "-63px",
        width: "122px",
        height: "60px",
      };
    }
  };
  const getTitleBox = () => {
    if (collection === "collect2coloumn") {
      return {
        marginTop: "50px",
        fontSize: "7.5px",
      };
    }
  };
  const getLikeBox = () => {
    if (collection === "collect2coloumn") {
      return {
        fontSize: "8px",
        marginTop: "-65px",
        marginLeft: "10px",
      };
    }
  };
  const getDateBox = () => {
    if (collection === "collect2coloumn") {
      return {
        fontSize: "7px",
        marginTop: "30px",
        marginLeft: "5px",
      };
    }
  };
  const getPostWho = () => {
    if (collection === "collect2coloumn") {
      return {
        fontSize: "7.5px",
        marginTop: "45px",
        marginLeft: "5px",
      };
    }
  };
  const onHandlePost = async (postId) => {
    setShowPost(!showPost);
    console.log(postId);
    const responseData = {
      data: [
        {
          post_id: 1,
          nickname: "tkrhdrhkdduf",
          content:
            '<div class="newdiv"><div style="color: rgb(33, 37, 41); font-weight: 400;"><div class="sc-jIkXHa ivUFba sc-fvxzrP bVHbtS"><img src="https://velog.velcdn.com/images/qlgks1/post/ccd6c98e-6a99-4d2a-a294-0e3331a25048/image.png" alt="post-thumbnail" class="sc-bXTejn bIVTKL"></div><div class="sc-brSvTw hRJeFN"><div class="sc-eGRUor hukCgh"><div class="sc-ctqQKy knnEKP atom-one"><p>[ 글의 목적: 브라우저에서 html 내부 javascript 로 작성된 코드가 실제로 실행되기 까지의 과정과 해당 원리를 기록 ]</p>\n<h1 id="javascript-실행되기-까지">javascript 실행되기 까지</h1>\n<blockquote>\n<p><code>javascript</code> 의 태생 자체는 "이렇게나 많은 일을 시키려고" 만들어지지 않았다. 그래서 그 근본이 조금 약한 부분은 있다. <del>오히려 매력적이다</del> 시대의 변화에 맞춰서 js는 정말 다양한 특성을 가지는, <strong><em>명령형(imperative), 함수형(functional), 프로토타입 기반(prototype-based) 객체지향 프로그래밍 을 지원하는 멀티 패러다임 프로그래밍 언어이면서 인터프리터 언어(Interpreter language)</em></strong> 이다. </p>\n</blockquote>\n<h2 id="1-javascript">1. javascript</h2>\n<p>사실 더 정확하게는 "브라우저의 작동원리" 를 이해하는게 더 좋다. 그래서 이 글의 정확한 범주는 <strong><em><span style="color:rgb(99 148 255)">"브라우저가 v8 엔진과 함께 javascript를 실행시키는 원리" 가 맞다.</span></em></strong> <del>(그리고 브라우저 전체의 원리는 다루지 않는다.)</del></p>\n<h3 id="1-엔진이-뭔데요">1) 엔진이 뭔데요</h3>\n<ul>\n<li>웹브라우저는 하나의 커다란 해석기 S/W 이다. 웹브라우저 자체의 구성 요소는 아래와 같다.</li>\n</ul>\n<p><img src="https://velog.velcdn.com/images/qlgks1/post/3e1b876d-1a4a-4713-98c5-5e31b94eedba/image.png"></p>\n<ul>\n<li>\n<p>여기서 <strong>"JS 엔진"</strong> 이 우리가 <code>.HTML</code> 이라는 <code>static file</code> 에 <code>&lt;script&gt;</code>로 감싼 javascript 코드를 실행하는 영역이다.</p>\n</li>\n<li>\n<p>일단 "렌더링 엔진" 은 HTML 문서를 한 줄씩 순차적으로 파싱하다가 "자바스크립트 파일을 로드하는 script 태그를 만나면 DOM 생성을 일시 중단" 한다. script 태그의 src에 정의된 자바스크립트 파일을 서버에 요청하여 응답받으면 <strong><em>자바스크립트 코드를 파싱하기 위해 자바스크립트 엔진에게 제어권을 넘긴다.</em></strong> 자바스크립트 엔진의 내부 원리를 좀 더 살펴보자.</p>\n</li>\n</ul>\n<h3 id="2-잠깐-살펴보는-v8">2) 잠깐 살펴보는 <code>V8</code></h3>\n<ul>\n<li>V8은 구글이 도입한 오픈소스 자바스크립트 엔진이다. C++로 작성되었으며 구글 크롬, 크로미움 웹 브라우저, NodeJS를 지원한다. <strong><em>환경과 상호작용하고 프로그램을 실행하기 위한 바이트코드를 생성하는 역할을 담당</em></strong> 한다. <strong><em><span style="color:rgb(99 148 255)">V8과 다른 엔진의 가장 큰 차이점은 V8 엔진의 JIT(Just In Time) 컴파일러다.</span></em></strong></li>\n</ul>\n<p><img src="https://velog.velcdn.com/images/qlgks1/post/6ece9eb3-0087-4a03-abaa-f4d9689d93cd/image.png"></p>\n<ul>\n<li>위 사진은 고수준의 V8 엔진 아키텍쳐다. 위 부분에서 Parser 부분 부터 조금 더 살펴보면 아래 그림과 같다.</li></ul></div></div></div></div></div><button class="but">스크랩</button>',
          image_url:
            "https://blog.kakaocdn.net/dn/clyrhv/btqXJVvfOgF/1lMKjoQo3iW0pyYDmV2HVK/img.jpg",
          memo: '<h1 id="javascript-실행되기-까지" style="font-size: 18px; line-height: 1.5; margin-bottom: 1rem; margin-top: 2.5rem; letter-spacing: -0.06px;">javascript 실행되기 까지</h1><div><img src="https://velog.velcdn.com/images/qlgks1/post/ccd6c98e-6a99-4d2a-a294-0e3331a25048/image.png" alt="post-thumbnail" class="sc-bXTejn bIVTKL"></div><div><ul><li><code style="color: var(--text1); box-sizing: border-box; max-width: 100%; font-size: 10.2px; background: var(--bg-inline-code); padding: 0.2em 0.4em; border-radius: 3px; margin-top: 0px; letter-spacing: -0.06px;">javascript</code><span style="color: var(--text1); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;Apple SD Gothic Neo&quot;, &quot;Malgun Gothic&quot;, &quot;맑은 고딕&quot;, 나눔고딕, &quot;Nanum Gothic&quot;, &quot;Noto Sans KR&quot;, &quot;Noto Sans CJK KR&quot;, arial, 돋움, Dotum, Tahoma, Geneva, sans-serif; font-size: 12px; letter-spacing: -0.06px; background-color: rgb(248, 249, 250);">&nbsp;의 태생 자체는 "이렇게나 많은 일을 시키려고" 만들어지지 않았다.</span></li><li><span style="color: var(--text1); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;Apple SD Gothic Neo&quot;, &quot;Malgun Gothic&quot;, &quot;맑은 고딕&quot;, 나눔고딕, &quot;Nanum Gothic&quot;, &quot;Noto Sans KR&quot;, &quot;Noto Sans CJK KR&quot;, arial, 돋움, Dotum, Tahoma, Geneva, sans-serif; font-size: 12px; letter-spacing: -0.06px; background-color: rgb(248, 249, 250);">&nbsp;그래서 그 근본이 조금 약한 부분은 있다.&nbsp;</span><del style="color: var(--text1); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;Apple SD Gothic Neo&quot;, &quot;Malgun Gothic&quot;, &quot;맑은 고딕&quot;, 나눔고딕, &quot;Nanum Gothic&quot;, &quot;Noto Sans KR&quot;, &quot;Noto Sans CJK KR&quot;, arial, 돋움, Dotum, Tahoma, Geneva, sans-serif; font-size: 12px; letter-spacing: -0.06px; background-color: rgb(248, 249, 250);">오히려 매력적이다</del><span style="color: var(--text1); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;Apple SD Gothic Neo&quot;, &quot;Malgun Gothic&quot;, &quot;맑은 고딕&quot;, 나눔고딕, &quot;Nanum Gothic&quot;, &quot;Noto Sans KR&quot;, &quot;Noto Sans CJK KR&quot;, arial, 돋움, Dotum, Tahoma, Geneva, sans-serif; font-size: 12px; letter-spacing: -0.06px; background-color: rgb(248, 249, 250);">&nbsp;시대의 변화에 맞춰서 js는 정말 다양한 특성을 가지는,&nbsp;</span><strong style="color: var(--text1); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;Apple SD Gothic Neo&quot;, &quot;Malgun Gothic&quot;, &quot;맑은 고딕&quot;, 나눔고딕, &quot;Nanum Gothic&quot;, &quot;Noto Sans KR&quot;, &quot;Noto Sans CJK KR&quot;, arial, 돋움, Dotum, Tahoma, Geneva, sans-serif; margin-bottom: 0px; font-size: 12px; letter-spacing: -0.06px; background-color: rgb(248, 249, 250);"><em style="margin-top: 0px; margin-bottom: 0px;">명령형(imperative), 함수형(functional), 프로토타입 기반(prototype-based) 객체지향 프로그래밍 을 지원하는 멀티 패러다임 프로그래밍 언어이면서 인터프리터 언어(Interpreter language)</em></strong><span style="color: var(--text1); font-family: -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;Apple SD Gothic Neo&quot;, &quot;Malgun Gothic&quot;, &quot;맑은 고딕&quot;, 나눔고딕, &quot;Nanum Gothic&quot;, &quot;Noto Sans KR&quot;, &quot;Noto Sans CJK KR&quot;, arial, 돋움, Dotum, Tahoma, Geneva, sans-serif; font-size: 12px; letter-spacing: -0.06px; background-color: rgb(248, 249, 250);">&nbsp;이다.</span></li></ul></div><div><span style="font-size: 12px; letter-spacing: -0.06px; background-color: rgb(248, 249, 250);"><br></span></div><div><span style="font-size: 12px; letter-spacing: -0.06px; background-color: rgb(248, 249, 250);"><br></span></div><div><h2 id="1-javascript" style="font-size: 12px; line-height: 1.5; margin-bottom: 1rem; letter-spacing: -0.06px;">1. javascript</h2><p style="font-size: 12px; letter-spacing: -0.06px;">사실 더 정확하게는 "브라우저의 작동원리" 를 이해하는게 더 좋다. 그래서 이 글의 정확한 범주는&nbsp;<strong><em><span style="color: rgb(99, 148, 255);">"브라우저가 v8 엔진과 함께 javascript를 실행시키는 원리" 가 맞다.</span></em></strong>&nbsp;<del>(그리고 브라우저 전</del></p></div>',
          tags: [
            {
              createdDate: "2024-01-16T00:51:43.8662",
              modifiedDate: "2024-01-16T00:51:43.8662",
              tagContent: "next.js",
            },
            {
              createdDate: "2024-01-16T00:51:43.869684",
              modifiedDate: "2024-01-16T00:51:43.869684",
              tagContent: "web",
            },
            {
              createdDate: "2024-01-16T00:51:43.869684",
              modifiedDate: "2024-01-16T00:51:43.869684",
              tagContent: "프론트엔드",
            },
          ],
          title: "javascript 실행되기 까지",
          url: "https://velog.io/@qlgks1/javascript-node-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC",
          like_count: 3,
          is_like: false,
          createdDate: "2024-01-16T00:51:43.85549",
          modifiedDate: "2024-01-16T00:51:43.85549",
        },
      ],
    };
    setDataPostDetail(responseData.data);
    // try {
    //   const response = await api.get("/api/post", {
    //     params: {
    //       postId: postId,
    //     },
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   });
    //   console.log(response.data);
    //   setDataPostDetail(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div className="postBackground">
      <div className="postContainer">
        <div className="collectionMenu">
          <div
            className="collection1img"
            ref={collection1Ref}
            onClick={() => handleCollection(collection1Ref)}
          ></div>
          <img
            className="collection2img"
            ref={collection2Ref}
            onClick={() => handleCollection(collection2Ref)}
            src={Collection2}
            alt="Collection2"
          ></img>
        </div>
        <div className={collection}>
          {dataPost.map((value, index) => (
            <div
              key={index}
              className="previewBox"
              onClick={() => onHandlePost(value.post_id)}
              style={getPreviewBoxStyle()}
            >
              <img
                className="hello"
                src={value.image_url}
                style={getImageBox()}
                alt={`Preview ${index}`}
              />
              <h3 style={getTitleBox()}>{value.title}</h3>{" "}
              {/* Use value.title */}
              <div className="datePreview">
                <div style={getDateBox()}>
                  {" "}
                  <span>
                    {value.modifiedDate
                      ? `수정됨: ${formatRelativeTime(value.modifiedDate)}`
                      : `작성됨: ${formatRelativeTime(value.createdDate)}`}
                  </span>
                </div>
              </div>
              <div className="postWhoPreview">
                <div style={getPostWho()}>
                  <span>post</span>
                  <b>{value.nickname}</b>
                </div>
              </div>
              <button className="recommendIcon" style={getRecommendBox()}>
                <img src={likeImg}></img>
              </button>
              <span className="likeCount" style={getLikeBox()}>
                {value.like_count}
              </span>
            </div>
          ))}
        </div>
      </div>
      {showPost && <PostDetail dataPostDetail={dataPostDetail} />}
    </div>
  );
};

export default PostPreview;
