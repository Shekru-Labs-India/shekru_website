import React from 'react'
import slider18 from '../assets/img/slider/slide18.jpg'
import slider19 from '../assets/img/slider/slide19.jpg'
import slider20 from '../assets/img/slider/slide20.jpg'
import slice2 from '../assets/img/content/slice-2.png'
import content1 from '../assets/img/content/content-01.jpg'
import content2 from '../assets/img/content/content-02.jpg'
import content3 from '../assets/img/content/content-03.jpg'
import bgg1 from '../assets/img/bg/bg1.jpg'
import bgg2 from '../assets/img/bg/bg2.jpg'
import t4 from '../assets/img/testmonials/t-4.jpg'
import t5 from '../assets/img/testmonials/t-5.jpg'
import t6 from '../assets/img/testmonials/t-6.jpg'
import newLight from '../assets/quform/images/captcha/courier-new-light.png'
import blog4 from '../assets/img/blog/blog-4.jpg'
import blog5 from '../assets/img/blog/blog-5.jpg'
import blog6 from '../assets/img/blog/blog-6.jpg'
import avtar4 from '../assets/img/avatar/avatar-04.jpg'
import avtar5 from '../assets/img/avatar/avatar-05.jpg'
import avtar6 from '../assets/img/avatar/avatar-06.jpg'
import client1 from '../assets/img/partners/client-01.png'
import client2 from '../assets/img/partners/client-02.png'
import client3 from '../assets/img/partners/client-03.png'
import client4 from '../assets/img/partners/client-04.png'
import client5 from '../assets/img/partners/client-05.png'
import client6 from '../assets/img/partners/client-06.png'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    console.log("Component Mounted");
  
    return () => {
      console.log("Component Unmounted");
    };
  }, []);
  
  return (
   
      <>
   
   
  {/* MAIN WRAPPER
    ================================================== */}
 <Navbar/>
  <div className="main-wrapper">
    {/* HEADER
================================================== */}
    
    {/* BANNER
  ================================================== */}
    <div
      id="rev_slider_149_1_wrapper"
      className="rev_slider_wrapper fullscreen-container"
      data-source="gallery"
      style={{ backgroundColor: "#2d3032", padding: 0 }}
    >
      {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
      <div
        id="rev_slider_149_1"
        className="rev_slider fullscreenbanner"
        style={{ display: "block" }}
        data-version="5.4.1"
      >
        <ul>
          {/* SLIDE  */}
          <li
            data-index="rs-407"
            data-transition="fade"
            data-slotamount="default"
            data-hideafterloop={0}
            data-hideslideonmobile="off"
            data-easein="default"
            data-easeout="default"
            data-masterspeed={2000}
            data-rotate={0}
            data-fstransition="fade"
            data-fsmasterspeed={1000}
            data-fsslotamount={7}
            data-saveperformance="off"
            data-title="One"
            data-param1=""
            data-param2=""
            data-param3=""
            data-param4=""
            data-param5=""
            data-param6=""
            data-param7=""
            data-param8=""
            data-param9=""
            data-param10=""
            data-description=""
          >
            {/* overlay */}
            <div className="opacity-extra-medium bg-black z-index-1" />
            {/* MAIN IMAGE */}
            <img
              src={slider18}
              alt="First Image"
            
              data-bgposition="center center"
              data-kenburns="on"
              data-duration={20000}
              data-ease="Linear.easeNone"
              data-scalestart={130}
              data-scaleend={100}
              data-rotatestart={0}
              data-rotateend={0}
              data-offsetstart="0 0"
              data-offsetend="0 0"
              data-bgparallax={6}
              className="rev-slidebg"
              data-no-retina=""
            />
            {/* LAYERS */}
            <div
              id="rrzm_407"
              className="rev_row_zone rev_row_zone_middle"
              style={{ zIndex: 6 }}
            >
              {/* LAYER NR. 1 */}
              <div
  className="tp-caption"
  id="slide-407-layer-14"
  data-x="['left','left','left','left']"
  data-hoffset="['100','100','100','100']"
  data-y="['middle','middle','middle','middle']"
  data-voffset="['0','0','0','0']"
  data-width="none"
  data-height="none"
  data-whitespace="nowrap"
  data-type="row"
  data-columnbreak={2}
  data-basealign="slide"
  data-responsive_offset="on"
  data-responsive="off"
  data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
  data-margintop="[-100,-100,-100,-75]"
  data-marginright="[0,0,0,0]"
  data-marginbottom="[0,0,0,0]"
  data-marginleft="[0,0,0,0]"
  data-textalign="['inherit','inherit','inherit','inherit']"
  data-paddingtop="[0,0,0,0]"
  data-paddingright="[100,50,50,50]"
  data-paddingbottom="[0,0,0,0]"
  data-paddingleft="[100,50,50,50]"
  style={{
    zIndex: 6,
    whiteSpace: "nowrap",
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 400,
    color: "rgba(255, 255, 255, 1)"
  }}
>
  {/* LAYER NR. 2 */}
  <div
    className="tp-caption"
    id="slide-407-layer-15"
    data-x="['left','left','left','left']"
    data-hoffset="['100','100','100','100']"
    data-y="['top','top','top','top']"
    data-voffset="['100','100','100','100']"
    data-width="none"
    data-height="none"
    data-whitespace="nowrap"
    data-type="column"
    data-responsive_offset="on"
    data-responsive="off"
    data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
    data-columnwidth="100%"
    data-margintop="[0,0,0,0]"
    data-marginright="[0,0,0,0]"
    data-marginbottom="[0,0,0,0]"
    data-marginleft="[0,0,0,0]"
    data-textalign="['center','center','center','center']"
    data-paddingtop="[0,0,0,0]"
    data-paddingright="[0,0,0,0]"
    data-paddingbottom="[0,0,0,0]"
    data-paddingleft="[0,0,0,0]"
    style={{
      zIndex: 7,
      width: "100%"
    }}
  >
    {/* LAYER NR. 3 */}
    <div
      className="tp-caption tp-resizeme"
      id="slide-407-layer-1"
      data-x="['left','left','center','center']"
      data-hoffset="['0','0','0','0']"
      data-y="['top','top','top','top']"
      data-voffset="['0','0','230','110']"
      data-fontsize="['110','90','100','70']"
      data-lineheight="['100','90','100','70']"
      data-width="['none','none','100%','100%']"
      data-height="none"
      data-whitespace="['nowrap','nowrap','normal','normal']"
      data-type="text"
      data-basealign="slide"
      data-responsive_offset="on"
      data-frames='[{"delay":"+290","split":"chars","splitdelay":0.05,"speed":750,"frame":"0","from":"y:40px;sX:1.5;sY:1.5;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"frame":"999","to":"sX:1;sY:1;opacity:0;fb:10px;","ease":"Power4.easeOut"}]'
      data-margintop="[0,0,0,0]"
      data-marginright="[0,0,0,0]"
      data-marginbottom="[30,20,30,30]"
      data-marginleft="[0,0,0,0]"
      data-textalign="['inherit','inherit','center','center']"
      data-paddingtop="[0,0,0,0]"
      data-paddingright="[0,0,40,40]"
      data-paddingbottom="[0,0,0,0]"
      data-paddingleft="[0,0,40,40]"
      style={{
        zIndex: 8,
        whiteSpace: "nowrap",
        fontSize: 110,
        lineHeight: 100,
        fontWeight: 600,
        color: "rgba(255, 255, 255, 1)",
        display: "inline-block",
        letterSpacing: "-5px"
      }}
    >
      Do It Different
    </div>
    {/* LAYER NR. 4 */}
    <div
      className="tp-caption tp-resizeme"
      id="slide-407-layer-2"
      data-x="['left','left','center','center']"
      data-hoffset="['0','50','0','0']"
      data-y="['top','top','top','top']"
      data-voffset="['0','430','460','290']"
      data-fontsize="['30','30','40','25']"
      data-lineheight="['40','40','50','30']"
      data-width="['none','100%','100%','100%']"
      data-height="none"
      data-whitespace="normal"
      data-type="text"
      data-basealign="slide"
      data-responsive_offset="on"
      data-frames='[{"delay":"+890","split":"chars","splitdelay":0.03,"speed":300,"frame":"0","from":"sX:2;sY:2;opacity:0;fb:5px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;fb:10px;","ease":"Power4.easeOut"}]'
      data-margintop="[0,0,0,0]"
      data-marginright="[0,0,0,0]"
      data-marginbottom="[0,0,0,0]"
      data-marginleft="[0,0,0,0]"
      data-textalign="['inherit','inherit','center','center']"
      data-paddingtop="[0,0,0,0]"
      data-paddingright="[0,0,0,0]"
      data-paddingbottom="[0,0,0,0]"
      data-paddingleft="[0,0,0,0]"
      style={{
        zIndex: 9,
        whiteSpace: "normal",
        fontSize: 30,
        lineHeight: 40,
        fontWeight: 300,
        color: "rgba(255, 255, 255, 1)",
        display: "block"
      }}
    >
      Grow your wealth with enduring success
    </div>
  </div>
</div>

            </div>
            {/* LAYER NR. 5 */}
            <div
              className="tp-caption tp-shape tp-shapewrapper"
              id="slide-407-layer-16"
              data-x="['center','center','center','center']"
              data-hoffset="['0','0','0','0']"
              data-y="['middle','middle','middle','middle']"
              data-voffset="['0','0','0','0']"
              data-width="full"
              data-height="full"
              data-whitespace="normal"
              data-type="shape"
              data-basealign="slide"
              data-responsive_offset="off"
              data-responsive="off"
              data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
              data-textalign="['inherit','inherit','inherit','inherit']"
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{ zIndex: 5, backgroundColor: "rgba(0, 0, 0, 0.35)" }}
            />
          </li>
          {/* SLIDE  */}
          <li
            data-index="rs-408"
            data-transition="fade"
            data-slotamount="default"
            data-hideafterloop={0}
            data-hideslideonmobile="off"
            data-easein="default"
            data-easeout="default"
            data-masterspeed={2000}
            data-rotate={0}
            data-saveperformance="off"
            data-title="Two"
            data-param1=""
            data-param2=""
            data-param3=""
            data-param4=""
            data-param5=""
            data-param6=""
            data-param7=""
            data-param8=""
            data-param9=""
            data-param10=""
            data-description=""
          >
            {/* overlay */}
            <div className="opacity-extra-medium bg-black z-index-1" />
            {/* MAIN IMAGE */}
            <img
              src={slider19}
              alt=""
              
              data-bgposition="center center"
              data-kenburns="on"
              data-duration={20000}
              data-ease="Linear.easeNone"
              data-scalestart={130}
              data-scaleend={100}
              data-rotatestart={0}
              data-rotateend={0}
              data-offsetstart="0 0"
              data-offsetend="0 0"
              data-bgparallax={6}
              className="rev-slidebg"
              data-no-retina=""
            />
            {/* LAYERS */}
            <div
              id="rrzm_408"
              className="rev_row_zone rev_row_zone_middle"
              style={{ zIndex: 6 }}
            >
              {/* LAYER NR. 6 */}
              <div
                className="tp-caption"
                id="slide-408-layer-14"
                data-x="['left','left','left','left']"
                data-hoffset="['100','100','100','100']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="row"
                data-columnbreak={2}
                data-basealign="slide"
                data-responsive_offset="on"
                data-responsive="off"
                data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-margintop="[-100,-100,-100,-75]"
                data-marginright="[0,0,0,0]"
                data-marginbottom="[0,0,0,0]"
                data-marginleft="[0,0,0,0]"
                data-textalign="['inherit','inherit','inherit','inherit']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[100,50,40,40]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[100,50,40,40]"
                style={{
                  zIndex: 6,
                  whiteSpace: "nowrap",
                  fontSize: 20,
                  lineHeight: 22,
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 1)"
                }}
              >
                {/* LAYER NR. 7 */}
                <div
                  className="tp-caption"
                  id="slide-408-layer-15"
                  data-x="['left','left','left','left']"
                  data-hoffset="['100','100','100','100']"
                  data-y="['top','top','top','top']"
                  data-voffset="['100','100','100','100']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="column"
                  data-responsive_offset="on"
                  data-responsive="off"
                  data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-columnwidth="100%"
                  data-margintop="[0,0,0,0]"
                  data-marginright="[0,0,0,0]"
                  data-marginbottom="[0,0,0,0]"
                  data-marginleft="[0,0,0,0]"
                  data-textalign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 7, width: "100%" }}
                >
                  {/* LAYER NR. 8 */}
                  <div
                    className="tp-caption tp-resizeme"
                    id="slide-408-layer-1"
                    data-x="['left','left','center','center']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['top','top','top','top']"
                    data-voffset="['0','0','230','110']"
                    data-fontsize="['110','90','100','70']"
                    data-lineheight="['100','90','100','70']"
                    data-width="['none','none','100%','100%']"
                    data-height="none"
                    data-whitespace="['nowrap','nowrap','normal','normal']"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":"+290","split":"chars","splitdelay":0.05,"speed":750,"frame":"0","from":"y:40px;sX:1.5;sY:1.5;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"frame":"999","to":"sX:1;sY:1;opacity:0;fb:10px;","ease":"Power4.easeOut"}]'
                    data-margintop="[0,0,0,0]"
                    data-marginright="[0,0,0,0]"
                    data-marginbottom="[30,20,30,30]"
                    data-marginleft="[0,0,0,0]"
                    data-textalign="['inherit','inherit','center','center']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,40,40]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,40,40]"
                    style={{
                      zIndex: 8,
                      whiteSpace: "nowrap",
                      fontSize: 110,
                      lineHeight: 100,
                      fontWeight: 600,
                      color: "rgba(255, 255, 255, 1)",
                      display: "inline-block",
                      letterSpacing: "-5px"
                    }}
                  >
                    Truly Solutions
                  </div>
                  {/* LAYER NR. 9 */}
                  <div
                    className="tp-caption tp-resizeme"
                    id="slide-408-layer-2"
                    data-x="['left','left','center','center']"
                    data-hoffset="['0','50','0','0']"
                    data-y="['top','top','top','top']"
                    data-voffset="['0','430','460','290']"
                    data-fontsize="['30','30','40','25']"
                    data-lineheight="['40','40','50','30']"
                    data-width="['none','100%','100%','100%']"
                    data-height="none"
                    data-whitespace="normal"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":"+890","split":"chars","splitdelay":0.03,"speed":300,"frame":"0","from":"sX:2;sY:2;opacity:0;fb:5px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;fb:10px;","ease":"Power4.easeOut"}]'
                    data-margintop="[0,0,0,0]"
                    data-marginright="[0,0,0,0]"
                    data-marginbottom="[0,0,0,0]"
                    data-marginleft="[0,0,0,0]"
                    data-textalign="['inherit','inherit','center','center']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 9,
                      whiteSpace: "normal",
                      fontSize: 30,
                      lineHeight: 40,
                      fontWeight: 300,
                      color: "rgba(255, 255, 255, 1)",
                      display: "block"
                    }}
                  >
                    Grow your wealth with enduring success
                  </div>
                </div>
              </div>
            </div>
            {/* LAYER NR. 10 */}
            <div
              className="tp-caption tp-shape tp-shapewrapper"
              id="slide-408-layer-16"
              data-x="['center','center','center','center']"
              data-hoffset="['0','0','0','0']"
              data-y="['middle','middle','middle','middle']"
              data-voffset="['0','0','0','0']"
              data-width="full"
              data-height="full"
              data-whitespace="normal"
              data-type="shape"
              data-basealign="slide"
              data-responsive_offset="off"
              data-responsive="off"
              data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
              data-textalign="['inherit','inherit','inherit','inherit']"
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{ zIndex: 5, backgroundColor: "rgba(0, 0, 0, 0.35)" }}
            />
          </li>
          {/* SLIDE  */}
          <li
            data-index="rs-409"
            data-transition="fade"
            data-slotamount="default"
            data-hideafterloop={0}
            data-hideslideonmobile="off"
            data-easein="default"
            data-easeout="default"
            data-masterspeed={2000}
            data-rotate={0}
            data-saveperformance="off"
            data-title="Three"
            data-param1=""
            data-param2=""
            data-param3=""
            data-param4=""
            data-param5=""
            data-param6=""
            data-param7=""
            data-param8=""
            data-param9=""
            data-param10=""
            data-description=""
          >
            {/* overlay */}
            <div className="opacity-extra-medium bg-black z-index-1" />
            {/* MAIN IMAGE */}
            <img
              src={slider20}
              alt="slide20"
              
             
              data-bgposition="center center"
              data-kenburns="on"
              data-duration={20000}
              data-ease="Linear.easeNone"
              data-scalestart={130}
              data-scaleend={100}
              data-rotatestart={0}
              data-rotateend={0}
              data-offsetstart="0 0"
              data-offsetend="0 0"
              data-bgparallax={6}
              className="rev-slidebg"
              data-no-retina=""
            />
            {/* LAYERS */}
            <div
              id="rrzm_409"
              className="rev_row_zone rev_row_zone_middle"
              style={{ zIndex: 6 }}
            >
              {/* LAYER NR. 11 */}
              <div
                className="tp-caption"
                id="slide-409-layer-14"
                data-x="['left','left','left','left']"
                data-hoffset="['100','100','100','100']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="row"
                data-columnbreak={2}
                data-basealign="slide"
                data-responsive_offset="on"
                data-responsive="off"
                data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                data-margintop="[-100,-100,-100,-75]"
                data-marginright="[0,0,0,0]"
                data-marginbottom="[0,0,0,0]"
                data-marginleft="[0,0,0,0]"
                data-textalign="['inherit','inherit','inherit','inherit']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[100,50,40,40]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[100,50,40,40]"
                style={{
                  zIndex: 6,
                  whiteSpace: "nowrap",
                  fontSize: 20,
                  lineHeight: 22,
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 1)"
                }}
              >
                {/* LAYER NR. 12 */}
                <div
                  className="tp-caption"
                  id="slide-409-layer-15"
                  data-x="['left','left','left','left']"
                  data-hoffset="['100','100','100','100']"
                  data-y="['top','top','top','top']"
                  data-voffset="['100','100','100','100']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="column"
                  data-responsive_offset="on"
                  data-responsive="off"
                  data-frames='[{"delay":"+0","speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-columnwidth="100%"
                  data-margintop="[0,0,0,0]"
                  data-marginright="[0,0,0,0]"
                  data-marginbottom="[0,0,0,0]"
                  data-marginleft="[0,0,0,0]"
                  data-textalign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 7, width: "100%" }}
                >
                  {/* LAYER NR. 13 */}
                  <div
                    className="tp-caption tp-resizeme"
                    id="slide-409-layer-1"
                    data-x="['left','left','center','center']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['top','top','top','top']"
                    data-voffset="['0','0','230','110']"
                    data-fontsize="['110','90','100','70']"
                    data-lineheight="['100','90','100','70']"
                    data-width="['none','none','100%','100%']"
                    data-height="none"
                    data-whitespace="['nowrap','nowrap','normal','normal']"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":"+290","split":"chars","splitdelay":0.05,"speed":750,"frame":"0","from":"y:40px;sX:1.5;sY:1.5;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"frame":"999","to":"sX:1;sY:1;opacity:0;fb:10px;","ease":"Power4.easeOut"}]'
                    data-margintop="[0,0,0,0]"
                    data-marginright="[0,0,0,0]"
                    data-marginbottom="[30,20,30,30]"
                    data-marginleft="[0,0,0,0]"
                    data-textalign="['inherit','inherit','center','center']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,40,40]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,40,40]"
                    style={{
                      zIndex: 8,
                      whiteSpace: "nowrap",
                      fontSize: 110,
                      lineHeight: 100,
                      fontWeight: 600,
                      color: "rgba(255, 255, 255, 1)",
                      display: "inline-block",
                      letterSpacing: "-5px"
                    }}
                  >
                    Joy of Success
                  </div>
                  {/* LAYER NR. 14 */}
                  <div
                    className="tp-caption tp-resizeme"
                    id="slide-409-layer-2"
                    data-x="['left','left','center','center']"
                    data-hoffset="['0','50','0','0']"
                    data-y="['top','top','top','top']"
                    data-voffset="['0','430','460','290']"
                    data-fontsize="['30','30','40','25']"
                    data-lineheight="['40','40','50','30']"
                    data-width="['none','100%','100%','100%']"
                    data-height="none"
                    data-whitespace="normal"
                    data-type="text"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-frames='[{"delay":"+890","split":"chars","splitdelay":0.03,"speed":300,"frame":"0","from":"sX:2;sY:2;opacity:0;fb:5px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;fb:10px;","ease":"Power4.easeOut"}]'
                    data-margintop="[0,0,0,0]"
                    data-marginright="[0,0,0,0]"
                    data-marginbottom="[0,0,0,0]"
                    data-marginleft="[0,0,0,0]"
                    data-textalign="['inherit','inherit','center','center']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 9,
                      whiteSpace: "normal",
                      fontSize: 30,
                      lineHeight: 40,
                      fontWeight: 300,
                      color: "rgba(255, 255, 255, 1)",
                      display: "block"
                    }}
                  >
                    Grow your wealth with enduring success
                  </div>
                </div>
              </div>
            </div>
            {/* LAYER NR. 15 */}
            <div
              className="tp-caption tp-shape tp-shapewrapper"
              id="slide-409-layer-16"
              data-x="['center','center','center','center']"
              data-hoffset="['0','0','0','0']"
              data-y="['middle','middle','middle','middle']"
              data-voffset="['0','0','0','0']"
              data-width="full"
              data-height="full"
              data-whitespace="normal"
              data-type="shape"
              data-basealign="slide"
              data-responsive_offset="off"
              data-responsive="off"
              data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
              data-textalign="['inherit','inherit','inherit','inherit']"
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{ zIndex: 5, backgroundColor: "rgba(0, 0, 0, 0.35)" }}
            />
          </li>
        </ul>
        <div style={{}} className="tp-static-layers">
          {/* LAYER NR. 16 */}
          <a
            className="tp-caption rev-btn tp-static-layer butn white theme-hover xs-wide"
            href="#!"
            id="slider-149-layer-18"
            data-x="['center','center','center','center']"
            data-hoffset="['0','0','0','0']"
            data-y="['bottom','bottom','bottom','bottom']"
            data-voffset="['175','100','140','90']"
            data-width="none"
            data-height="none"
            data-whitespace="nowrap"
            data-type="button"
            data-actions=""
            data-basealign="slide"
            data-responsive_offset="off"
            data-responsive="off"
            data-startslide={0}
            data-endslide={2}
            data-frames='[{"delay":1600,"speed":1000,"frame":"0","from":"y:20px;sX:1.5;sY:1.5;opacity:0;fb:10px;","to":"o:1;fb:0;","ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;fb:10px;","ease":"Power4.easeOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;"}]'
            data-textalign="['inherit','inherit','inherit','inherit']"
            style={{
              zIndex: 9,
              whiteSpace: "nowrap",
              outline: "none",
              cursor: "pointer"
            }}
          >
            <span>HOW TO INSTALL?</span>
          </a>
        </div>
      </div>
    </div>
    {/* INFO
  ================================================== */}
    <section className="p-0 services-blocks">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 p-0 bg-white">
            <div className="p-1-9 p-lg-2-3 p-xl-2-9 bg-primary h-100">
              <div className="features-flex-square">
                <div className="clearfix">
                  <div className="features-flex-square-icon">
                    <i className="icon-tools display-20 display-lg-17" />
                  </div>
                  <div className="features-flex-square-content">
                    <h4>
                      <a href="#!">Saving Investments</a>
                    </h4>
                    <p>
                      Our Mission is to deliver true results for your impressive
                      international Businesses consultant.
                    </p>
                    <a
                      href="#!"
                      className="features-flex-square-content-button"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-0 bg-white">
            <div className="p-1-9 p-lg-2-3 p-xl-2-9 bg-primary-90 h-100">
              <div className="features-flex-square">
                <div className="clearfix">
                  <div className="features-flex-square-icon">
                    <i className="icon-hotairballoon display-20 display-lg-17" />
                  </div>
                  <div className="features-flex-square-content">
                    <h4>
                      <a href="#!">Online Consulting</a>
                    </h4>
                    <p>
                      Our Mission is to deliver true results for your impressive
                      international Businesses consultant.
                    </p>
                    <a
                      href="#!"
                      className="features-flex-square-content-button"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-0 bg-white">
            <div className="p-1-9 p-lg-2-3 p-xl-2-9 bg-primary-80 h-100">
              <div className="features-flex-square">
                <div className="clearfix">
                  <div className="features-flex-square-icon">
                    <i className="icon-layers display-20 display-lg-17" />
                  </div>
                  <div className="features-flex-square-content">
                    <h4>
                      <a href="#!">Investment Banking</a>
                    </h4>
                    <p>
                      Our Mission is to deliver true results for your impressive
                      international Businesses consultant.
                    </p>
                    <a
                      href="#!"
                      className="features-flex-square-content-button"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ABOUT US
  ================================================== */}
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-heading title-style5 left half">
              <span>about us</span>
              <h2>Welcome to our consulting</h2>
              <div className="square">
                <span className="separator-left bg-primary" />
                <span className="separator-right bg-primary" />
              </div>
            </div>
            <p>
              Inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit.
            </p>
            <div className="mb-4">
              <span>
                Call us 24/7. We can answer for{" "}
                <strong className="font-weight-600 lead">
                  all your questions.
                </strong>
              </span>
            </div>
            <div className="border-bottom mb-3 mb-lg-4 pb-3 pb-lg-4">
              <h4 className="d-inline-block h6 mb-0 me-4">(+44) 123 456 789</h4>
              <div className="d-inline-block me-4 align-top">
                <strong className="font-weight-700 text-primary">or</strong>
              </div>
              <h4 className="d-inline-block h6 mb-0">
                <a href="#!">inquiry@youremail.com</a>
              </h4>
            </div>
            <div className="text-end float-start w-100">
              <p className="float-start text-start mb-0">
                <span className="font-weight-700 d-block">Keir Prestonly</span>
                CEO of company
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="about-ceo ms-lg-5">
              <img
                src={slice2}
                alt="..."
                width={513}
                height={467}
              />
              <div className="inner-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* TAB
  ================================================== */}
    <section className="bg-light-gray">
      <div className="container">
        <div className="section-heading title-style5">
          <span>Services</span>
          <h2 className="text-uppercase font-weight-600">What we do</h2>
          <div className="square">
            <span className="separator-left bg-primary" />
            <span className="separator-right bg-primary" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="horizontaltab tab-style4">
              <ul className="resp-tabs-list hor_1">
                <li className="ms-4">
                  <span className="count display-5 display-md-2 alt-font font-weight-700">
                    01
                  </span>
                  <div className="tab-box">
                    <h6>Planning</h6>
                    <span>Vision to plan</span>
                  </div>
                </li>
                <li className="ms-4">
                  <span className="count display-5 display-md-2 alt-font font-weight-700">
                    02
                  </span>
                  <div className="tab-box">
                    <h6>Marketing</h6>
                    <span>Plan to market</span>
                  </div>
                </li>
                <li>
                  <span className="count display-5 display-md-2 alt-font font-weight-700">
                    03
                  </span>
                  <div className="tab-box">
                    <h6>Growth</h6>
                    <span>Start to growth</span>
                  </div>
                </li>
              </ul>
              <div className="resp-tabs-container box-shadow-large bg-white hor_1">
                <div>
                  <div className="bg-white box-shadow-primary p-3">
                    <div className="row align-items-center">
                      <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                        <img
                          src={content1}
                          alt="..."
                          width={545}
                          height={348}
                        />
                      </div>
                      <div className="col-lg-6">
                        <div className="ps-lg-1-9">
                          <h3 className="h5">Vision to planning</h3>
                          <p>
                            Duis Integration aute irure design in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat
                            non design proident.
                          </p>
                          <ul className="list-style-16">
                            <li>Exclusive design</li>
                            <li>Life time supports</li>
                            <li>Solve your problem with us</li>
                            <li>We Provide Awesome Services</li>
                            <li>Your business deserves best software</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white box-shadow-primary p-3">
                    <div className="row align-items-center">
                      <div className="col-lg-6 order-lg-1 order-2">
                        <div className="pe-1-9">
                          <h3 className="h5">Plan to marketing</h3>
                          <p>
                            Build integration aute irure design in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat
                            design proident.
                          </p>
                          <ul className="list-style-16">
                            <li>Life time supports</li>
                            <li>Exclusive design</li>
                            <li>Solve your problem with us</li>
                            <li>We Provide Awesome Services</li>
                            <li>Your business deserves best software</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 order-lg-2 order-1 text-center text-lg-start mb-4 mb-lg-0">
                        <img
                          src={content2}
                          alt="..."
                          width={545}
                          height={348}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white box-shadow-primary p-3">
                    <div className="row align-items-center">
                      <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                        <img
                          src={content3}
                          alt="..."
                          width={545}
                          height={348}
                        />
                      </div>
                      <div className="col-lg-6">
                        <div className="ps-lg-1-9">
                          <h3 className="h5">Start to growth</h3>
                          <p>
                            Duis Integration aute irure design in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat
                            non design proident.
                          </p>
                          <ul className="list-style-16">
                            <li>Exclusive design</li>
                            <li>Life time supports</li>
                            <li>Solve your problem with us</li>
                            <li>We Provide Awesome Services</li>
                            <li>Your business deserves best software</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ADVICE
  ================================================== */}
    <section
      className="parallax"
      data-overlay-dark={7}
      style={{ backgroundImage: `url(${bgg1})` }}
    >
      <div className="container text-center">
        <div className="section-heading title-style5 half white">
          <h2>Are you looking for proessional advice?</h2>
          <p>
            We always try to provide you our best business consulting service.
          </p>
        </div>
        <a href="#!" className="butn primary white-hover">
          <span>Contact Us</span>
        </a>
      </div>
    </section>
    {/* TESTIMONIAL
  ================================================== */}
    <section>
      <div className="container">
        <div className="section-heading title-style5">
          <span>Testimonial</span>
          <h2 className="text-uppercase font-weight-600">What People Say</h2>
          <div className="square">
            <span className="separator-left bg-primary" />
            <span className="separator-right bg-primary" />
          </div>
        </div>
        <div className="owl-carousel owl-theme testmonial-style5">
          <div className="row testmonials-style5 text-center text-lg-start">
            <div className="col-lg-3 mb-3 mb-lg-0">
              <img
                alt="..."
                src={t4}
                width={103}
                height={102}
              />
            </div>
            <div className="col-lg-9">
              <div className="data">
                <p>
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae
                  dicta.
                </p>
                <h5>Stepha Kruse</h5>
                <span>Marketing Lead</span>
                <i className="fas fa-quote-right display-18 opacity1" />
              </div>
            </div>
          </div>
          <div className="row testmonials-style5 text-center text-lg-start">
            <div className="col-lg-3 mb-3 mb-lg-0">
              <img
                alt="..."
                src={t5}
                width={103}
                height={102}
              />
            </div>
            <div className="col-lg-9">
              <div className="data">
                <p>
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae
                  dicta.
                </p>
                <h5>Dunican keithly</h5>
                <span>Networking Lead</span>
                <i className="fas fa-quote-right display-18 opacity1" />
              </div>
            </div>
          </div>
          <div className="row testmonials-style5 text-center text-lg-start">
            <div className="col-lg-3 mb-3 mb-lg-0">
              <img
                alt="..."
                src={t6}
                width={103}
                height={102}
              />
            </div>
            <div className="col-lg-9">
              <div className="data">
                <p>
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae
                  dicta.
                </p>
                <h5>Alivin Corondo</h5>
                <span>Networking Lead</span>
                <i className="fas fa-quote-right display-18 opacity1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* PRICING TABLE
  ================================================== */}
    <section className="bg-light-gray">
      <div className="container">
        <div className="section-heading title-style5">
          <span>Pricing</span>
          <h2 className="text-uppercase font-weight-600">Our Standard Price</h2>
          <div className="square">
            <span className="separator-left bg-primary" />
            <span className="separator-right bg-primary" />
          </div>
        </div>
        <div className="row mt-n1-9">
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="price-table-style3">
              <div className="price-table-header">
                <div className="title-item mb-1-9 py-4 bg-primary border-radius-5">
                  <h5>Basic</h5>
                  <span>Per Month</span>
                </div>
                <h4>
                  <sup>$</sup>99
                </h4>
              </div>
              <div className="price-table-content">
                <ul>
                  <li>Business analysing</li>
                  <li>Knowledge Management</li>
                  <li>Business Idea Ready</li>
                  <li>Customer Support</li>
                  <li>Market Research</li>
                </ul>
                <div className="text-center">
                  <a href="#!">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="price-table-style3">
              <div className="price-table-header">
                <div className="title-item mb-1-9 py-4 bg-primary border-radius-5">
                  <h5>Standard</h5>
                  <span>Per Month</span>
                </div>
                <h4>
                  <sup>$</sup>199
                </h4>
              </div>
              <div className="price-table-content">
                <ul>
                  <li>Business analysing</li>
                  <li>Knowledge Management</li>
                  <li>Business Idea Ready</li>
                  <li>Customer Support</li>
                  <li>Market Research</li>
                </ul>
                <div className="text-center">
                  <a href="#!">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <div className="price-table-style3">
              <div className="price-table-header">
                <div className="title-item mb-1-9 py-4 bg-primary border-radius-5">
                  <h5>Premium</h5>
                  <span>Per Month</span>
                </div>
                <h4>
                  <sup>$</sup>299
                </h4>
              </div>
              <div className="price-table-content">
                <ul>
                  <li>Business analysing</li>
                  <li>Business Idea Ready</li>
                  <li>Customer Support</li>
                  <li>Digital Transformation</li>
                  <li>Knowledge Management</li>
                </ul>
                <div className="text-center">
                  <a href="#!">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ADVICE FORM
  ================================================== */}
    <section
      className="parallax"
      data-overlay-dark={7}
      style={{ backgroundImage: `url(${bgg2})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-1-9 mb-lg-0">
            <div className="pe-lg-1-9">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading white title-style5 left half">
                    <h2 className="text-uppercase h3 font-weight-600">
                      Get advice any time
                    </h2>
                    <div className="square">
                      <span className="separator-left bg-primary" />
                      <span className="separator-right bg-primary" />
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-1">
                  <div className="pb-4 border-bottom border-color-light-white">
                    <span className="d-inline-block display-22 text-light-gray align-top w-30px">
                      <i className="fas fa-phone vertical-align-top" />
                    </span>
                    <div className="d-inline-block align-top ps-2 w-75">
                      <h5 className="mb-1 text-white text-uppercase h6">
                        Phone Number
                      </h5>
                      <p className="mb-0 text-light-gray">(+44) 123 456 789</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="py-4 border-bottom border-color-light-white">
                    <span className="d-inline-block display-22 text-light-gray align-top w-30px">
                      <i className="fas fa-map-marker-alt vertical-align-top" />
                    </span>
                    <div className="d-inline-block align-top ps-2 w-75">
                      <h5 className="mb-1 text-white text-uppercase h6">
                        Locations
                      </h5>
                      <p className="mb-0 text-light-gray">
                        Regina ST, London, SK 8GH.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="py-4">
                    <span className="d-inline-block display-22 text-light-gray align-top w-30px">
                      <i className="far fa-envelope vertical-align-top" />
                    </span>
                    <div className="d-inline-block align-top ps-2 w-75">
                      <h5 className="mb-1 text-white text-uppercase h6">
                        Email
                      </h5>
                      <p className="mb-0 text-light-gray">
                        email@youradress.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mt-2 footer-social-icons">
                    <ul className="ps-0">
                      <li>
                        <a href="#!">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form-box bg-white p-1-6 p-lg-1-9 border border-width-8">
              <h5 className="h6 mb-3">Let's talk about your business.</h5>
              {/* start form here */}
              <form
                className="quform"
                action="quform/contact.php"
                method="post"
                encType="multipart/form-data"
               
              >
                <div className="quform-elements">
                  <div className="row">
                    {/* Begin Text input element */}
                    <div className="col-md-6">
                      <div className="quform-element form-group">
                        <div className="quform-input">
                          <input
                            id="name"
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Your name here"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Text input element */}
                    {/* Begin Text input element */}
                    <div className="col-md-6">
                      <div className="quform-element form-group">
                        <div className="quform-input">
                          <input
                            id="email"
                            className="form-control"
                            type="text"
                            name="email"
                            placeholder="Your email here"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Text input element */}
                    {/* Begin Text input element */}
                    <div className="col-md-6">
                      <div className="quform-element form-group">
                        <div className="quform-input">
                          <input
                            id="subject"
                            className="form-control"
                            type="text"
                            name="subject"
                            placeholder="Your subject here"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Text input element */}
                    {/* Begin Text input element */}
                    <div className="col-md-6">
                      <div className="quform-element form-group">
                        <div className="quform-input">
                          <input
                            id="phone"
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Text input element */}
                    {/* Begin Textarea element */}
                    <div className="col-md-12">
                      <div className="quform-element form-group">
                        <div className="quform-input">
                          <textarea
                            id="message"
                            className="form-control"
                            name="message"
                            rows={3}
                            placeholder="Tell us a few words"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Textarea element */}
                    {/* Begin Captcha element */}
                    <div className="col-md-12">
                      <div className="quform-element">
                        <div className="form-group">
                          <div className="quform-input">
                            <input
                              id="type_the_word"
                              className="form-control"
                              type="text"
                              name="type_the_word"
                              placeholder="Type the below word"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="quform-captcha">
                            <div className="quform-captcha-inner">
                              <img
                                src={newLight}
                                alt="..."
                                width={75}
                                height={27}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Captcha element */}
                    {/* Begin Submit button */}
                    <div className="col-md-12">
                      <div className="quform-submit-inner">
                        <button className="butn" type="submit">
                          <span>Submit comment</span>
                        </button>
                      </div>
                      <div className="quform-loading-wrap text-start">
                        <span className="quform-loading" />
                      </div>
                    </div>
                    {/* End Submit button */}
                  </div>
                </div>
              </form>
              {/* end form here */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* BLOG
  ================================================== */}
    <section>
      <div className="container">
        <div className="section-heading title-style5">
          <span>Blog</span>
          <h2 className="text-uppercase font-weight-600">Latest Blog Posts</h2>
          <div className="square">
            <span className="separator-left bg-primary" />
            <span className="separator-right bg-primary" />
          </div>
        </div>
        <div className="row mt-n1-9">
          <div className="col-md-6 col-lg-4 mt-1-9">
            <article className="card blog-card">
              <div className="card-img">
                <img
                  src={blog4}
                  alt="..."
                  width={364}
                  height={264}
                />
              </div>
              <div className="card-body">
                <div className="d-block text-muted mb-2 small">March 18,</div>
                <h3>
                  <a href="blog-post.html">
                    Business adviser analyzing financial
                  </a>
                </h3>
                <p>
                  Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
                <span className="read-more">
                  <a href="blog-post.html">read more...</a>
                </span>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={avtar4}
                      className="rounded-circle sm-avatar"
                      alt="..."
                      width={35}
                      height={35}
                    />
                    <div className="ms-3">
                      <span className="small">
                        <span className="font-weight-bold">By: </span>Jonal
                        Adams
                      </span>
                    </div>
                  </div>
                  <a href="#!">
                    <i className="ti-comment-alt me-2 align-middle" />
                    30
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <article className="card blog-card">
              <div className="card-img">
                <img
                  src={blog5}
                  alt="..."
                  width={364}
                  height={264}
                />
              </div>
              <div className="card-body">
                <div className="d-block text-muted mb-2 small">March 02,</div>
                <h3>
                  <a href="blog-post.html">The progress work of the company</a>
                </h3>
                <p>
                  Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
                <span className="read-more">
                  <a href="blog-post.html">read more...</a>
                </span>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={avtar5}
                      className="rounded-circle sm-avatar"
                      alt="..."
                      width={35}
                      height={35}
                    />
                    <div className="ms-3">
                      <span className="small">
                        <span className="font-weight-bold">By: </span>Monique
                        Yip
                      </span>
                    </div>
                  </div>
                  <a href="#!">
                    <i className="ti-comment-alt me-2 align-middle" />
                    28
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-6 col-lg-4 mt-1-9">
            <article className="card blog-card">
              <div className="card-img">
                <img
                  src={blog6}
                  alt="..."
                  width={364}
                  height={264}
                />
              </div>
              <div className="card-body">
                <div className="d-block text-muted mb-2 small">
                  February 26,
                </div>
                <h3>
                  <a href="blog-post.html">The business woman hard work</a>
                </h3>
                <p>
                  Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
                <span className="read-more">
                  <a href="blog-post.html">read more...</a>
                </span>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={avtar6}
                      className="rounded-circle sm-avatar"
                      alt="..."
                      width={35}
                      height={35}
                    />
                    <div className="ms-3">
                      <span className="small">
                        <span className="font-weight-bold">By: </span>Lynn Smith
                      </span>
                    </div>
                  </div>
                  <a href="#!">
                    <i className="ti-comment-alt me-2 align-middle" />
                    22
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    {/* CLIENTS
  ================================================== */}
    <div className="section-clients bg-light-gray">
      <div className="container">
        <div className="owl-carousel owl-theme clients" id="clients">
          <div className="item">
            <img
              alt="partner-image"
              src={client1}
              width={165}
              height={27}
            />
          </div>
          <div className="item">
            <img
              alt="partner-image"
              src={client2}
              width={165}
              height={27}
            />
          </div>
          <div className="item">
            <img
              alt="partner-image"
              src={client3}
              width={165}
              height={27}
            />
          </div>
          <div className="item">
            <img
              alt="partner-image"
              src={client4}
              width={165}
              height={27}
            />
          </div>
          <div className="item">
            <img
              alt="partner-image"
              src={client5}
              width={165}
              height={27}
            />
          </div>
          <div className="item">
            <img
              alt="partner-image"
              src={client6}
              width={165}
              height={27}
            />
          </div>
        </div>
      </div>
    </div>
  
  </div>
  <a href="#" className="scroll-to-top"><i className="fas fa-angle-up" aria-hidden="true"></i></a>
   <Footer/>
</>

   
  )
}

export default Home
