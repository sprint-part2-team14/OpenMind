import { QuestionReaction } from './QuestionReaction';

// 기본
// 1.type이
// like면 좋아요 아이콘
// dislike면 싫어요 아이콘

// 2.type이
// like면 좋아요
// dislike면 싫어요

// 3.type이
// like면 좋아요의 값(숫자) 받아오기
// dislike면 싫어요의 값(숫자) 받아오기

// 더 하면 좋을 기능
// 4.싫어요, 좋아요 동시엔 적용 할 수 없게 구현하기

// 5.버튼은 한번만 실행

// 6.좋아요, 싫어요 취소시(한번 누르면 +1, 한번 더 누르면 -1)
// api에 get 요청후 like,dislike 값을 받아오고 거기서 -1 해서 다시 post 보내기

// 7.좋아요 싫어요에 is_active 속성을 주고 로컬스토리지에 저장하여
// like가 is_active면 dislike버튼 비활성화 처리 반대도 마찬가지,
// 좋아요 취소시 로컬스토리지에서 is_active 삭제

const Reaction = ({id}) => {
  return (
    <>
      <div>
        <QuestionReaction type='like' id={id} />
        <QuestionReaction type='dislike' id={id} />
      </div>
    </>
  );
};

export default Reaction;