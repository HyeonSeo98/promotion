import React from 'react'
import './Contents.css'

export default function Contents() {

  const Pros = [ 
    {
      id: 'pro-01',
      image: '/images/img_01.jpg',
      alt: 'img01',
      title: '대세는 선인장!',
      sub : '요즘 가장 핫 한 인테리어 소품으로 사랑을 받고 있는 선인장!\n이런 선인장에도 정말 다양한 종류가 있답니다.\n선인장으로 홈 스타일링을 할땐 하나의 선인장 보단\n두 세 개의 선인장을 함께 두는 것이 인터리어 효과에 더좋습니다.',
      btn: 'MORE ITEM',
      num: '01'
    },
    {
      id: 'pro-02',
      image: '/images/img_02.jpg',
      alt: 'img02',
      title: '서둘지 않는 매력의 드라이플라워',
      sub : '꽃을 좋아하지만 금방 시들어버리기에\n선뜻 구매를 못지 못하신다면 드라이플라워나 프렌치포도\n플라워를 추천드려요.\n꽃의 아름다움과 오랫동안 함께하실 수있을 거에요',
      btn: 'MORE ITEM',
      num: '02'
    },
    {
      id: 'pro-03',
      image: '/images/img_03.jpg',
      alt: 'img03', 
      title: '또 하나의 작은 세상 테라리움',
      sub : '재미있는 식물 기르기를 원하신다면 테라리움을 꾸며보세요.\n 다양한 식물과 다양한 소품으로 스타일링 하여\n 세상에서 단 하나뿐인 나만의 정원을 가질 수 있어요.',
      btn: 'MORE ITEM',
      num: '03'
    },
    {
      id: 'pro-04',
      image: '/images/img_04.jpg',
      alt: 'img04',
      title: '진짜 나무같은 조화나무',
      sub : '식물관리가 어려우시다면 조화 나무를 입양하세요.\n요즘은 정말 높은 컬러디로 제작 되어 가까이서 보지 않으면\n 진짜 나무와 구분하기 힘들어요.',
      btn: 'MORE ITEM',
      num: '04'
    },
    {
      id: 'pro-05',
      image: '/images/img_05.jpg',
      alt: 'img05',
      title: '화분 스탠드 & 화분 테이블',
      sub : '조금 더 색다른 연출을 원하신다면 화분 스탠드와 화분 테이블을\n 사용해보세요.화분 스탠드는 낮은 높이의 화분의 키를 높여\n색다른 공간 연출을 도와주며 화분 테이블은 식물과 함께 할 수 있는\n 휴식공간을 만들어 드릴거에요.',
      btn: 'MORE ITEM',
      num: '05'
    }
  ]


  return (
    <>
      <section className="content">
        <div className="wrap">
          {
            Pros.map((pro) => {
              return(
                <> 
                  <div className='pro' key={pro.id} >
                    <img src={pro.image} alt={pro.alt} />
                    <div className="txt">
                      <p className="title">{pro.title}</p>
                      <p className="sub">{pro.sub}</p>
                      <p className='num'>{pro.num}</p>
                      <button>{pro.btn}</button>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </section>
    </>
  )

  
}
