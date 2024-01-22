import Image from 'next/image';
import { groq } from 'next-sanity';
import { client, urlForImage } from '@/utils/sanityClient';
import { getImageDimensions } from '@sanity/asset-utils';
import Mail from '../images/ico-mail.svg';
import Phone from '../images/ico-phone.svg';
import LinkedIn from '../images/ico-linkedin.svg';
import Twitter from '../images/ico-x.svg';
import Button from './Button';

export default async function Team({ title, sub, noCta }) {
  const allMembers = await client.fetch(groq`
  *[_type == 'member'] | order(order asc)[0...4]{
    order,
    name,
    occu,
    'pic': pic.asset,
    socials {
      phone,
      email,
      linkedIn,
      twitter
    }
  }`);

  return (
    <section className="team-sec">
      <div className="wrapper">
        <div className="team-heading">
          <h2>{title}</h2>
          {sub && <p className="sub">{sub}</p>}
        </div>

        <div className="team-members">
          {allMembers.map((member, i) => (
            <div className="team-member-card" key={i}>
              <Image
                src={urlForImage(member.pic).url()}
                alt={member.name}
                width={getImageDimensions(member.pic).width}
                height={getImageDimensions(member.pic).height}
                className="member-dp"
              />
              <h3>{member.name}</h3>
              <p className="desig">{member.occu}</p>
              <div className="socials">
                {member.socials.phone && (
                  <a href={`tel:${member.socials.phone}`} target="_blank">
                    <Image src={Phone} alt="Phone" />
                  </a>
                )}
                {member.socials.email && (
                  <a href={`mailto:${member.socials.email}`} target="_blank">
                    <Image src={Mail} alt="Email" />
                  </a>
                )}
                {member.socials.linkedIn && (
                  <a href={member.socials.linkedIn} target="_blank">
                    <Image src={LinkedIn} alt="LinkedIn" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} target="_blank">
                    <Image src={Twitter} alt="Twitter" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {!noCta && (
          <div className="cta-div">
            <Button btnText="Meet the team" href="/about" />
          </div>
        )}
      </div>
    </section>
  );
}
