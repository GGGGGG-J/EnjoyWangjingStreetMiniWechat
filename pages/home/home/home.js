// pages/basics/home/home.js
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    elements: [{
        title: '办事指南',
        name: 'instruction',
        color: 'cyan',
        icon: 'newsfill'
      },
      {
        title: '办事大厅',
        name: 'office',
        color: 'blue',
        icon: 'servicefill'
      },
      {
        title: '政民互动',
        name: 'interaction',
        color: 'purple',
        icon: 'group'
      },
      {
        title: '预约服务 ',
        name: 'appointment',
        color: 'mauve',
        icon: 'post'
      },
    ],
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://img1.qunarzz.com/travel/poi/201403/28/daab198c5029a423ddb12cfb.jpg_r_720x400x95_0c4e4c13.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://youimg1.c-ctrip.com/target/100i10000000o9w0fE878.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://image.scol.com.cn/data/attachment/forum/202002/25/1582633049799.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://image.scol.com.cn/data/attachment/forum/202105/25/1621945509990.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://image.scol.com.cn/data/attachment/forum/202105/05/1620216786386.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://youimg1.c-ctrip.com/target/100v0q000000ghzir4719.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://image.scol.com.cn/data/attachment/forum/202107/07/1625659035742.jpg'
    }],
  },

})