import React from 'react'
import { Image } from 'astro:assets'
import { getImageDimensions } from '@sanity/asset-utils'
import { urlForImage } from '../../utils/urlForImage'
import IcoBio from '../../images/ico-info.svg'
import IcoMail from '../../images/ico-mail.svg'
import IcoPhone from '../../images/ico-phone.svg'
import IcoLink from '../../images/ico-linkedin.svg'
import IcoClose from '../../images/ico-close-white.svg'

export default function TeamHomeReact({ content, allMembers }) {
  return (
    <section className='team-sec sec-padding' id='team'>
      <div className='wrapper-2'>
        <div className='team-sec-heading main-grid'>
          <div className='left-part'>
            <span className='sec-tag'>{content.tag}</span>
          </div>
          <div className='heading-content'>
            <h2>{content.title}</h2>
          </div>
        </div>

        <div className='all-members'>
          {
            allMembers.map((member, i) => (
              <div className='member-card' key={i}>
                <div className='pic'>
                  <img
                    src={urlForImage(member.pic).url()}
                    alt={member.name}
                    width={getImageDimensions(member.pic).width}
                    height={getImageDimensions(member.pic).height}
                    loading='lazy'
                    className='member-pic'
                  />
                  <div className='bio-btn' title='Bio' data-id={member._id}>
                    <img
                      src={IcoBio}
                      alt='Bio'
                      width='18'
                      height='18'
                    />
                  </div>
                </div>
                <h3 className='name'>{member.name}</h3>
                <span className='desig'>{member.occu}</span>
                <div className='socials'>
                  {member.socials?.email && (
                    <a href={`mailto:${member.socials?.email}`}>
                      <img
                        src={IcoMail}
                        alt='Email'
                        width='18'
                        height='18'
                      />
                    </a>
                  )}
                  {member.socials?.phone && (
                    <a href={`tel:${member.socials?.phone}`}>
                      <img
                        src={IcoPhone}
                        alt='Phone'
                        width='18'
                        height='18'
                      />
                    </a>
                  )}
                  {member.socials?.linkedIn && (
                    <a href={member.socials.linkedIn} target='_blank'>
                      <img
                        src={IcoLink}
                        alt='LinkedIn'
                        width='18'
                        height='18'
                      />
                    </a>
                  )}
                </div>
                {member.socials?.calendly && (
                  <a
                    href={member.socials.calendly}
                    target='_blank'
                    className='book-button'
                  >
                    Book a Call
                  </a>
                )}
              </div>
            ))
          }
        </div>

        <div className='member-bio-modal'>
          <div className='bio-card'>
            <div className='bio-card-content'>
              <img src='' alt='pic' width='120' height='120' className='bio-pic' />
              <h3 className='name'></h3>
              <span className='desig'></span>
              <p className='bio-text'></p>
            </div>
            <div className='bio-close'>
              <img
                src={IcoClose}
                alt='Close'
                width='18'
                height='18'
              />
            </div>
          </div>
          <div className='bio-hidden-bg'></div>
        </div>
      </div>
    </section>
  )
}
