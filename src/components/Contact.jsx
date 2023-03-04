import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from '@mui/icons-material/Twitter';
const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-16" id="contact">
      <div className='text-[#14d0b0] font-bold text-3xl'>
        Let's Talk
      </div>
      <div className="flex justify-center gap-12 py-12">
          <a
            href="https://github.com/ArkaPrabhaChowdhury"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon className='hover:text-gray-500 rounded-full'/>
          </a>
          <a
            href="mailto:arkopra@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon className='hover:text-red-400 rounded-full'/>
          </a>
        
          <a
            href="https://www.linkedin.com/in/arka-pra/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className='hover:text-[#0a66c2] rounded-full' />
          </a>
          <a
            href="https://twitter.com/arkopra"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className='hover:text-[#00acee] rounded-full'/>
          </a>
        </div>
    </div>
  )
}

export default Contact