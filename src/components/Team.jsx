import Link from 'next/link';
import Image from 'next/image';
import Mail from '../images/ico-mail.svg';
import Phone from '../images/ico-phone.svg';
import LinkedIn from '../images/ico-linkedin.svg';

export default function Team({ title, sub }) {
  return (
    <section className="team-sec">
      <div className="wrapper">
        <div className="team-heading">
          <h2>{title}</h2>
          {sub && <p className="sub">{sub}</p>}
        </div>

        <div className="team-members">
          <div className="team-member-card">
            {/* <Image src={Team1} alt="Name" className="member-dp" /> */}
            <h3>Rob Shannon</h3>
            <p className="desig">Managing Director</p>
            <div className="socials">
              <a href="mailto:">
                <Image src={Mail} alt="Email" />
              </a>
              <a href="/">
                <Image src={Phone} alt="Phone" />
              </a>
              <a href="/">
                <Image src={LinkedIn} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="team-member-card">
            {/* <Image src={Team2} alt="Name" className="member-dp" /> */}
            <h3>Gavin Fox</h3>
            <p className="desig">Director</p>
            <div className="socials">
              <a href="mailto:">
                <Image src={Mail} alt="Email" />
              </a>
              <a href="/">
                <Image src={Phone} alt="Phone" />
              </a>
              <a href="/">
                <Image src={LinkedIn} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="team-member-card">
            {/* <Image src={Team3} alt="Name" className="member-dp" /> */}
            <h3>Laura Walshe</h3>
            <p className="desig">IT Recruiter</p>
            <div className="socials">
              <a href="mailto:">
                <Image src={Mail} alt="Email" />
              </a>
              <a href="/">
                <Image src={Phone} alt="Phone" />
              </a>
              <a href="/">
                <Image src={LinkedIn} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="team-member-card">
            {/* <Image src={Team4} alt="Name" className="member-dp" /> */}
            <h3>Dylan Toal</h3>
            <p className="desig">IT Recruiter</p>
            <div className="socials">
              <a href="mailto:">
                <Image src={Mail} alt="Email" />
              </a>
              <a href="/">
                <Image src={Phone} alt="Phone" />
              </a>
              <a href="/">
                <Image src={LinkedIn} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        <div className="cta-div">
          <Link href="/about" className="button">
            Meet the team
          </Link>
        </div>
      </div>
    </section>
  );
}
