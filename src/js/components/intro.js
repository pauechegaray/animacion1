import 'objectFitPolyfill';
import 'imports-loader?define=>false!animation.gsap';
import ScrollMagic from 'ScrollMagic';

function intro() {

// ScrollMagic controller for all animation sequences
const controller = new ScrollMagic.Controller();

//Image sequence classes
const images = [
  "intro__image--1",
  "intro__image--2",
  "intro__image--3",
  "intro__image--4",
  "intro__image--5",
  "intro__image--6",
  "intro__image--7",
  "intro__image--8",
  "intro__image--9",
  "intro__image--10",
  "intro__image--11",
  "intro__image--12",
  "intro__image--13",
  "intro__image--14",
  "intro__image--15",
  "intro__image--16",
  "intro__image--17",
  "intro__image--18",
  "intro__image--19",
  "intro__image--20",
  "intro__image--21",
  "intro__image--22",
  "intro__image--23",
  "intro__image--24",
  "intro__image--25",
  "intro__image--26",
  "intro__image--27",
  "intro__image--28",
  "intro__image--29",
  "intro__image--30",
  "intro__image--31",
  "intro__image--32",
  "intro__image--33",
  "intro__image--34",
  "intro__image--35",
  "intro__image--36",
  "intro__image--37",
  "intro__image--38",
  "intro__image--39",
  "intro__image--40",
  "intro__image--41",
  "intro__image--42",
  "intro__image--43",
  "intro__image--44",
  "intro__image--45",
  "intro__image--46",
  "intro__image--47",
  "intro__image--48",
  "intro__image--49",
  "intro__image--50",
  "intro__image--51",
  "intro__image--52",
  "intro__image--53",
  "intro__image--54",
  "intro__image--55",
  "intro__image--56",
  "intro__image--57",
  "intro__image--58",
  "intro__image--59",
  "intro__image--60",
  "intro__image--61",
  "intro__image--62",
  "intro__image--63",
  "intro__image--64",
  "intro__image--65",
  "intro__image--66",
  "intro__image--67",
  "intro__image--68",
  "intro__image--69",
  "intro__image--70",
  "intro__image--71",
  "intro__image--72",
  "intro__image--73",
  "intro__image--74",
  "intro__image--75",
  "intro__image--76",
  "intro__image--77",
  "intro__image--78",
  "intro__image--79",
  "intro__image--80",
  "intro__image--81",
  "intro__image--82",
  "intro__image--83",
  "intro__image--84",
  "intro__image--85",
  "intro__image--86",
  "intro__image--87",
  "intro__image--88",
  "intro__image--89",
  "intro__image--90",
  "intro__image--91",
  "intro__image--92",
  "intro__image--93",
  "intro__image--94",
  "intro__image--95",
  "intro__image--96"
];

const obj = {curImg: 0};

const tween = TweenMax.to(obj, 0.5,
  {
    curImg: images.length - 1,
    roundProps: "curImg",
    immediateRender: true,
    ease: Linear.easeNone,
    onUpdate: function () {
      var elements = document.querySelectorAll('.intro__image');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.visibility = 'hidden';
      }
      document.getElementById(images[obj.curImg]).style.visibility = 'visible';
    }
  }
);

const imagesScene = new ScrollMagic.Scene({triggerElement: ".intro__trigger", duration: "250%"})
.setTween(tween)
.addTo(controller);

//Pin the Intro Media Section after image sequence is completed
new ScrollMagic.Scene({triggerElement: ".intro__end"})
.setClassToggle(".intro__media", "active")
.addTo(controller);



}


export default intro;
