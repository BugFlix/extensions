import React, { useState, useRef } from "react";
import "./updatepreview.css";
import Collection2 from "../images/multiple.png";
import MyPost from "../pages/mypost";
import api from "../config/apiConfig";
import likeImg from "../images/likestar.png";
const MyPostPreview = ({ dataMyPost }) => {
  const collection1Ref = useRef();
  const collection2Ref = useRef();
  const [collection, selectCollection] = useState("collect1column");
  const [showMyPost, setShowMyPost] = useState(false);
  const [dataMyPostDetail, setDataMyPostDetail] = useState();
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
  const onHandleMyPost = async () => {
    setShowMyPost(!showMyPost);
    const responseData = {
      data: [
        {
          post_id: 2,
          content:
            '<div class="newdiv"><div style="color: rgb(33, 37, 41); font-weight: 400;"><div class="sc-jIkXHa ivUFba sc-fvxzrP bVHbtS"><img src="https://velog.velcdn.com/images/tkrhdrhkdduf/post/3e659ab5-12b1-4ec8-8d39-ed1d007905c2/image.png" alt="post-thumbnail" class="sc-bXTejn bIVTKL"></div><div class="sc-brSvTw hRJeFN"><div class="sc-eGRUor hukCgh"><div class="sc-ctqQKy knnEKP atom-one"><h3 id="nextjs-layout">Next.js Layout</h3>\n<p>레이아웃이란 메뉴바 같은 고정된 위치를 갖는 애들입니다.<br>\n즉 css로 따지면 position: fixed와 비슷합니다.<br>\n예시</p>\n<p><img src="https://velog.velcdn.com/images/tkrhdrhkdduf/post/46a0c82e-b91c-4fa8-82dc-34c877b37c15/image.gif">(이건 vue.js로 만들었다)<br>\n옆에 보면 메뉴바 처럼 스크롤해도 고정되는 애들입니다.<br>\n페이지를 넘나드는데도 안바뀌는 부분도 레이아웃입니다.</p>\n<pre class=" language-tsx"><code class=" language-tsx"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>\n  children<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  children<span class="token punctuation">:</span> React<span class="token punctuation">.</span>ReactNode\n<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inter<span class="token punctuation">.</span>className<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n<p>이것은 layout.tsx 파일 입니다. 즉, 파일 내부에 보면<br>\nRootLayout(최상위 레이아웃)입니다.<br>\n그안에 page.tsx가 있을겁니다.</p>\n<pre class=" language-tsx"><code class=" language-tsx"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token punctuation">&gt;</span></span><span class="token plain-text"> hello\n\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>즉, rootlayout안에 children이 있다. 그래서 페이지를 넘나들 때마다<br>\n위에 보이는 page.tsx, 즉, 페이지 컴포넌트가 children 안에 들어가서 보여지게 됩니다.<br>\n쉽게 말하면 layout이 page를 포함 하고 있습니다.</p>\n<h3 id="페이지-구조">페이지 구조</h3>\n<p>src 폴더는 주소 라우팅 창이라고 보실수 있습니다. 그래서 다른류에 타입스크립트 또는 자바스크립트 파일이 있으면(주소와 관련이 없으면(함수, 기능) app 폴더 밖에다 둠)</p>\n<p><img src="https://velog.velcdn.com/images/tkrhdrhkdduf/post/ff7f4a6c-8a1d-49e6-807b-160e20b64e26/image.png"></p>\n<p>페이지 구조를 보시면 메인 홈 주소는 page.tsx 입니다<br>\n그리고 라우팅 즉 다른 주소 이동 및 새로운 주소는 </p>\n<p><img src="https://velog.velcdn.com/images/tkrhdrhkdduf/post/962c5658-da43-485b-bf75-619fd44ab4e8/image.png"></p>\n<p>인럭식으로 app 내부에 home 폴더를 만들면 이게 주소가 됩니다. 거기안에 타입스크립트 파일 을 넣어줍시다.<br>\n<img src="https://velog.velcdn.com/images/tkrhdrhkdduf/post/ca22c8f1-a87f-421a-978d-0785a98c2199/image.png"></p>\n<p>/home 으로 접속하니 뜨네요 ㅎㅎ</p>\n<p>오늘은 이렇게 nextjs 와 페이지 구조를 한번 알아봤는데요 도움이 되셨다면 추천 한번만 눌러주세용 ㅎㅎ</p></div></div></div></div></div><button class="but">스크랩</button>',
          image_url:
            "https://blog.kakaocdn.net/dn/clyrhv/btqXJVvfOgF/1lMKjoQo3iW0pyYDmV2HVK/img.jpg",
          memo: '<b>nextjs Layout</b><div><b><br></b></div><div><span style="font-size: 12px; letter-spacing: -0.06px;">레이아웃이란 메뉴바 같은 고정된 위치를 갖는 애들입니다.</span><br></div><div><span style="font-size: 12px; letter-spacing: -0.06px;"><br></span></div><div><pre class=" language-tsx" style="box-sizing: border-box; font-family: &quot;Fira Mono&quot;, source-code-pro, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; font-size: 15px; padding: 1em; border-radius: 4px; line-height: 1.5; overflow: auto; letter-spacing: 0px; max-width: 100%; background: var(--prism-code-block-bg); color: var(--prism-default-text); word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none; margin-top: 0.5em; margin-bottom: 0.5em;"><code class=" language-tsx" style="box-sizing: border-box; max-width: 100%; color: var(--prism-default-text); background: none; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none;"><span class="token keyword" style="font-size: 12px; color: var(--prism-code-7);">export</span> <span class="token keyword" style="font-size: 12px; color: var(--prism-code-7);">default</span> <span class="token keyword" style="font-size: 12px; color: var(--prism-code-7);">function</span> <span class="token function" style="font-size: 12px; color: var(--prism-code-8);">RootLayout</span><span class="token punctuation" style="font-size: 12px; color: var(--prism-code-2);">(</span><span class="token parameter" style="font-size: 12px;"><span class="token punctuation" style="color: var(--prism-code-2);">{</span>\n  children<span class="token punctuation" style="color: var(--prism-code-2);">,</span>\n<span class="token punctuation" style="color: var(--prism-code-2);">}</span><span class="token punctuation" style="color: var(--prism-code-2);">:</span> <span class="token punctuation" style="color: var(--prism-code-2);">{</span>\n  children<span class="token punctuation" style="color: var(--prism-code-2);">:</span> React<span class="token punctuation" style="color: var(--prism-code-2);">.</span>ReactNode\n<span class="token punctuation" style="color: var(--prism-code-2);">}</span></span><span class="token punctuation" style="font-size: 12px; color: var(--prism-code-2);">)</span> <span class="token punctuation" style="font-size: 12px; color: var(--prism-code-2);">{</span>\n  <span class="token keyword" style="font-size: 12px; color: var(--prism-code-7);">return</span> <span class="token punctuation" style="font-size: 12px; color: var(--prism-code-2);">(</span>\n    <span class="token tag" style="font-size: 12px; color: var(--prism-code-3);"><span class="token tag" style="font-size: 12px; color: var(--prism-code-3);"><span class="token punctuation" style="color: var(--prism-code-2);">&lt;</span>html</span> <span class="token attr-name" style="color: var(--prism-code-4);">lang</span><span class="token attr-value" style="color: var(--prism-code-6);"><span class="token punctuation" style="color: var(--prism-code-2);">=</span><span class="token punctuation" style="color: var(--prism-code-2);">"</span>en<span class="token punctuation" style="color: var(--prism-code-2);">"</span></span><span class="token punctuation" style="color: var(--prism-code-2);">&gt;</span></span><span class="token plain-text" style="font-size: 12px;">\n      </span><span class="token tag" style="font-size: 12px; color: var(--prism-code-3);"><span class="token tag" style="font-size: 12px; color: var(--prism-code-3);"><span class="token punctuation" style="color: var(--prism-code-2);">&lt;</span>body</span> <span class="token attr-name" style="color: var(--prism-code-4);">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation" style="color: var(--prism-code-2);">=</span><span class="token punctuation" style="color: var(--prism-code-2);">{</span>inter<span class="token punctuation" style="color: var(--prism-code-2);">.</span>className<span class="token punctuation" style="color: var(--prism-code-2);">}</span></span><span class="token punctuation" style="color: var(--prism-code-2);">&gt;</span></span><span class="token punctuation" style="font-size: 12px; color: var(--prism-code-2);">{</span>children<span class="token punctuation" style="font-size: 12px; color: var(--prism-code-2);">}</span><span class="token tag" style="font-size: 12px; color: var(--prism-code-3);"><span class="token tag" style="font-size: 12px; color: var(--prism-code-3);"><span class="token punctuation" style="color: var(--prism-code-2);">&lt;/</span>body</span><span class="token punctuation" style="color: var(--prism-code-2);">&gt;</span></span><span class="token plain-text" style="font-size: 12px;">\n    </span><span class="token tag" style="font-size: 12px; color: var(--prism-code-3);"><span class="token tag" style="font-size: 12px; color: var(--prism-code-3);"><span class="token punctuation" style="color: var(--prism-code-2);">&lt;/</span>html</span><span class="token punctuation" style="color: var(--prism-code-2);">&gt;</span></span>\n  <span class="token punctuation" style="font-size: 12px; color: var(--prism-code-2);">)</span>\n<span class="token punctuation" style="font-size: 12px; color: var(--prism-code-2);">}</span></code></pre><p style="font-size: 12px; letter-spacing: -0.06px;">이것은 <font color="#5567bf">layout.tsx</font> 파일 입니다. 즉, 파일 내부에 보면<br>RootLayout(최상위 레이아웃)입니다.<br>그안에 page.tsx가 있을겁니다.</p><pre class=" language-tsx" style="box-sizing: border-box; font-family: &quot;Fira Mono&quot;, source-code-pro, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; font-size: 15px; padding: 1em; border-radius: 4px; line-height: 1.5; overflow: auto; letter-spacing: 0px; max-width: 100%; background: var(--prism-code-block-bg); color: var(--prism-default-text); word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none; margin-top: 0.5em; margin-bottom: 0.5em;"><code class=" language-tsx" style="box-sizing: border-box; max-width: 100%; color: var(--prism-default-text); background: none; word-spacing: normal; word-break: normal; overflow-wrap: normal; tab-size: 4; hyphens: none;"><span class="token keyword" style="font-size: 12px; color: var(--prism-code-7);">export</span> <span class="token keyword" style="font-size: 12px; color: var(--prism-code-7);">default</span> <span class="token keyword" style="font-size: 12px; color: var(--prism-code-7);">function</span> <span class="token function" style="font-size: 12px; color: var(--prism-code-8);">Home</span><span class="token punctuation" style="font-size: 12px; color: var(--prism-code-2);">(</span><span class="token punctuation" style="font-size: 12px; color: var(--prism-code-2);">)</span> <span class="token punctuation" style="font-size: 12px; color: var(--prism-code-2);">{</span>\n  <span class="token keyword" style="font-size: 12px; color: var(--prism-code-7);">return</span> <span class="token punctuation" style="font-size: 12px; color: var(--prism-code-2);">(</span>\n    <span class="token tag" style="font-size: 12px; color: var(--prism-code-3);"><span class="token tag" style="font-size: 12px; color: var(--prism-code-3);"><span class="token punctuation" style="color: var(--prism-code-2);">&lt;</span>main</span> <span class="token punctuation" style="color: var(--prism-code-2);">&gt;</span></span><span class="token plain-text" style="font-size: 12px;"> hello\n\n    </span><span class="token tag" style="font-size: 12px; color: var(--prism-code-3);"><span class="token tag" style="font-size: 12px; color: var(--prism-code-3);"><span class="token punctuation" style="color: var(--prism-code-2);">&lt;/</span>main</span><span class="token punctuation" style="color: var(--prism-code-2);">&gt;</span></span>\n  <span class="token punctuation" style="font-size: 12px; color: var(--prism-code-2);">)</span>\n<span class="token punctuation" style="font-size: 12px; color: var(--prism-code-2);">}</span></code></pre></div>',
          tags: ["next.js", "웹", "프론트엔드"],
          title: "next.js layout",
          like_count: 5,
          url: "https://velog.io/@tkrhdrhkdduf/Next.js",
          is_like: false,
        },
      ],
    };
    setDataMyPostDetail(responseData.data);
    // try {
    //   const response = await api.get("/api/post/mine", {
    //     params: {
    //       url: window.location.href,
    //     },
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   });
    //   console.log(response.data);
    //   setDataMyPostDetail(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="MyPostBackground">
      <div className="myPostContainer">
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
          {dataMyPost.map((value, index) => (
            <div
              key={index}
              className="myPreviewBox"
              style={getPreviewBoxStyle()}
              onClick={onHandleMyPost}
            >
              <img
                className="myBox"
                src={value.image_url}
                style={getImageBox()}
              ></img>
              <h3 style={getTitleBox()}>{value.title}</h3>
              <button className="recommendIcon" style={getRecommendBox()}>
                <img src={likeImg}></img>
              </button>
              <span className="likeCount">{value.like_count}</span>
            </div>
          ))}
        </div>
      </div>
      {showMyPost && <MyPost dataMyPostDetail={dataMyPostDetail} />}
    </div>
  );
};

export default MyPostPreview;
