.portfolio{
    background-color: white;
    border-radius:6px;
    width:100%;
    display:inline-block;
}

/*Tabs*/
.customTabs .customTabs_item{
    padding:0px !important;
    min-width: 0px !important;
    margin-right:20px !important;
    text-transform: inherit !important;
    font-size:14px !important;
    font-weight: 400 !important;
    outline-width:0px !important;
}
.customTabs .active{
    color: var(--main-color) !important;
  }
/*End Tabs*/

/*Cards*/
.CustomCard{
    height: 100%;
    max-width:350px;
    box-shadow:0px 0px 48px 0px rgba(4, 6, 4, 0.08) !important;
    border-radius:5px;
    overflow:hidden;
    outline-width: 0px !important;
}
.CustomCard .CustomCard_image{
    height:180px;
}
.CustomCard .CustomCard_title{
    font-weight:500 !important;
    font-size: 14.5px;
    color: #000;
} 
.CustomCard .CustomCard_caption{
    font-size: 12.5px;
    color: #989898;
    line-height: 18px;
    display: block;
    font-weight:400 !important;
}
.media-custom {
  background: #fff !important;
  -webkit-transition: .2s all ease !important;;
  -o-transition: .2s all ease !important;;
  transition: .2s all ease !important;;
  margin-bottom: 20px !important;;
  position: relative !important;;
  top: 0 !important;;
}
.media-custom .CustomCard_image {
  -webkit-transition: .3s all ease !important;;
  -o-transition: .3s all ease !important;;
  transition: .3s all ease !important;;
}
.media-custom:focus .CustomCard_image, .media-custom:hover .CustomCard_image {
  opacity: 0.7;
  -webkit-transform: scale(1.06) !important;
  -ms-transform: scale(1.06) !important;;
  transform: scale(1.06) !important;;
}
/*End Cards*/

/*Dialog*/
.projectDialog{
  width:100%;
  height:auto !important;
  display:flex;
  align-items:center;
  justify-content:center;
  top:50;
  left:50;
}
.projectDialog .projectDialog_image{
  max-height:300px;
  width:100%;
  object-fit: cover;
  object-position: center center;
}
.projectDialog .projectDialog_description{
  margin-top:10px !important;
  text-align:justify !important;
  line-height:1.3 !important;
}
.projectDialog .projectDialog_actions{
    justify-content:center !important;
    margin-bottom:5px !important;
}
.projectDialog .projectDialog_icon{
   color:darkslategray;
   margin:0px 12px;
   cursor:pointer;
}
.projectDialog .projectDialog_icon:hover{
    color:var(--main-color) !important;
 }
 .projectDialog .projectDialog_icon > .MuiSvgIcon-root {
    font-size:32px !important;
 }

 
  
/*End Dialog*/
 
  
