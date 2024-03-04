import KEBAB_SRC from '../Assets/Icon/iconMore.svg';
import Styles from '../Styles/FeedCard.module.css';

//import FeedFooter from "./FeedFooter";
import EmptyAnswer from './EmptyAnswer';
import FeedQuestion from './FeedQuestion';
import RejectAnswer from './RejectAnswer';
import SentAnswer from './SentAnswer';
import Reaction from './Reaction';
import BadgeBrown from './BadgeBrown';

//api 연동 전 임시 데이터
const demoData = {
  type: '질문',
  createdAt: '2주전',
  question: '좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?',
  profileImage: 'https://i.pinimg.com/236x/14/db/0b/14db0b0d30d52f81fd9681a137663578.jpg',
  username: '아초는고양이',
  answer:
    '그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다. 찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를 청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에 피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은 방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다. 이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은 피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는 봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다.',
  //answer: '',
  isRejected: false,
};

//추후 api 연동하면서 불러올 데이터 변경할 예정
//(일단 피드카드 레이아웃 구현 완료하였으며, 전달할 props도 지정함)
const FeedCard = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.nav}>
        <BadgeBrown />
        <img className={Styles.kebab} src={KEBAB_SRC} />
      </div>
      <FeedQuestion type={demoData.type} createdAt={demoData.createdAt}>
        {demoData.question}
      </FeedQuestion>
      {/* 삼항 연산자를 중첩하여 Answer부분을 조건부 렌더링 */}
      {demoData.isRejected ? (
        <RejectAnswer profileImg={demoData.profileImage} username={demoData.username} createdAt={demoData.createdAt} />
      ) : !demoData.isRejected && demoData.answer.length ? (
        <SentAnswer profileImg={demoData.profileImage} username={demoData.username} createdAt={demoData.createdAt}>
          {demoData.answer}
        </SentAnswer>
      ) : (
        <EmptyAnswer profileImg={demoData.profileImage} username={demoData.username} />
      )}
      <div className={Styles.line}></div>
      <Reaction />
    </div>
  );
};

export default FeedCard;
