import img from "../img/photosnap.svg";
import img1 from "../img/manage.svg";
import img2 from "../img/account.svg";
import img3 from "../img/myhome.svg";
import img4 from "../img/loop-studios.svg";
import img5 from "../img/faceit.svg";
import img6 from "../img/shortly.svg";
import img7 from "../img/insure.svg";
import img8 from "../img/eyecam-co.svg";
import img9 from "../img/the-air-filter-company.svg";
const Main = () => {
  return (
    <div className="container">
      {/* Card 1 */}
      <div className="card active__card">
        <div className="profile">
          <div className="profile__img">
            <img src={img} alt="" />
          </div>
          <div className="profile__details">
            <div className="profile__heading">
              <p className="card__header">Photosnap</p>
              <div className="badges">New!</div>
              <div className="badges">Featured</div>
            </div>
            <p className="card__title">Senior Frontend Developer</p>
            <div className="time__details">
              <span>1d ago </span>
              <span>Full time</span>
              <span> Rwanda</span>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="category__item">Frontend</div>
          <div className="category__item">Senior</div>
          <div className="category__item">HTML</div>
          <div className="category__item">CSS</div>
          <div className="category__item">JavaScript</div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="card active__card">
        <div className="profile">
         < img src={img1} alt=""/> 
          <div className="profile__details">
            <div className="profile__heading">
              <p className="card__header">Manage</p>
              <div className="badges">New!</div>
              <div className="badges">Featured</div>
            </div>
            <p className="card__title">Fullstack Developer</p>
            <div className="time__details">
              <span>1d ago </span>
              <span>Part time</span>
              <span> Remote</span>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="category__item">Fullstack </div>
          <div className="category__item">Midweight</div>
          <div className="category__item">Python</div>
          <div className="category__item">React</div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="card">
        <div className="profile">
          <img src={img2} alt="" />
          <div className="profile__details">
            <div className="profile__heading">
              <p className="card__header">Account</p>
              <div className="badges">New!</div>
            </div>
            <p className="card__title">Junior Frontend Developer</p>
            <div className="time__details">
              <span>2d ago </span>
              <span>Part time</span>
              <span> USA only</span>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="category__item">Frontend </div>
          <div className="category__item">Junior</div>
          <div className="category__item">React</div>
          <div className="category__item">Sass</div>
          <div className="category__item">JavaScript</div>
        </div>
      </div>
      {/* Card 4 */}
      <div className="card">
        <div className="profile">
          <img src={img3} alt="" />
          <div className="profile__details">
            <div className="profile__heading">
              <p className="card__header">MyHome</p>
              <div className="badges">New!</div>
            </div>
            <p className="card__title">Junior Frontend Developer</p>
            <div className="time__details">
              <span>5d ago </span>
              <span>contact</span>
              <span>USA only</span>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="category__item">Frontend </div>
          <div className="category__item">Junior</div>
          <div className="category__item">CSS</div>
          <div className="category__item">JavaScript</div>
        </div>
      </div>
      {/* Card 5 */}
      <div className="card">
        <div className="profile">
          <img src={img4} alt ="" />
          <div className="profile__details">
            <div className="profile__heading">
              <p className="card__header">Loop studios</p>
            </div>
            <p className="card__title">software Engineer</p>
            <div className="time__details">
              <span>1w ago </span>
              <span>Full time</span>
              <span> Worldwide</span>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="category__item">Fullstack </div>
          <div className="category__item">Midweight </div>
          <div className="category__item">JavaScript</div>
          <div className="category__item">Sass</div>
          <div className="category__item">Ruby</div>
        </div>
      </div>
      {/* Card 6 */}
      <div className="card">
        <div className="profile">
          <img src ={img5} alt=""/>
          <div className="profile__details">
            <div className="profile__heading">
              <p className="card__header">facelt</p>
            </div>
            <p className="card__title"> Junior Backend Developer</p>
            <div className="time__details">
              <span>2w ago </span>
              <span>Part time</span>
              <span>UK only</span>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="category__item">Backend </div>

          <div className="category__item">Junior</div>
          <div className="category__item">Ruby</div>
          <div className="category__item">RoR</div>
        </div>
      </div>
      {/* Card 7 */}
      <div className="card">
        <div className="profile">
         < img src={img6} alt=""/>
          <div className="profile__details">
            <div className="profile__heading">
              <p className="card__header">shortly</p>
            </div>
            <p className="card__title">Junior Developer</p>
            <div className="time__details">
              <span>2w ago </span>
              <span>Full time</span>
              <span> Worldwide</span>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="category__item">Frontend </div>
          <div className="category__item">Junior </div>
          <div className="category__item">HTML </div>
          <div className="category__item">Sass</div>
          <div className="category__item">JavaScript</div>
        </div>
      </div>
 {/* Card 8 */}
 <div className="card">
        <div className="profile">
          <img src={img7} alt=""/>
          <div className="profile__details">
            <div className="profile__heading">
              <p className="card__header">Insure</p>
            </div>
            <p className="card__title">Junior Frontend Developer</p>
            <div className="time__details">
              <span>2w ago </span>
              <span>Full time</span>
              <span> USA only</span>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="category__item">Frontend </div>
          <div className="category__item">Junior </div>
          <div className="category__item">Vue </div>
          <div className="category__item">JavaScript</div>
          <div className="category__item">Sass</div>
        </div>
      </div>
      {/* Card 9 */}
      <div className="card">
        <div className="profile">
          <img src={img8} alt=""/>
          <div className="profile__details">
            <div className="profile__heading">
              <p className="card__header">Eyecam Co.</p>
            </div>
            <p className="card__title">Full stack Engineer</p>
            <div className="time__details">
              <span>3w ago </span>
              <span>Full time</span>
              <span> Worldwide</span>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="category__item">Fullstack</div>
          <div className="category__item">Midweight</div>
          <div className="category__item">JavaScript</div>
          <div className="category__item">Django</div>
          <div className="category__item">Python</div>
        </div>
      </div>
      {/* Card 10 */}
      <div className="card">
        <div className="profile">
          <img src={img9} alt=""/>
          <div className="profile__details">
            <div className="profile__heading">
              <p className="card__header">The Air Filter company</p>
            </div>
            <p className="card__title">Front-end Dev</p>
            <div className="time__details">
              <span>1mo ago </span>
              <span>Part time</span>
              <span> Worldwide</span>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="category__item">Frontend</div>
          <div className="category__item">Junior</div>
          <div className="category__item">React</div>
          <div className="category__item">Sass</div>
          <div className="category__item">JavaScript</div>
        </div>
      </div>
      </div>

    
  )
}

export default Main;
