import Head from 'next/head';
import tw from 'twin.macro';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
const Ball = dynamic(() => import('~components/Ball'), {
  ssr: false
});

const Home = () => {
  return (
    <div css={tw`bg-black min-h-screen text-white font-inter`}>
      <Head>
        <title>Michael Ilie</title>
      </Head>
      <div
        css={tw`relative h-screen`}
        style={{
          background: `url('./images/darkbg.svg') center center`,
          backgroundSize: 'cover'
        }}
      >
        <Ball />

        <div css={tw`absolute top-0 left-0 right-0 bottom-0 z-10 pointer-events-none`}>
          <div css={tw`text-center flex flex-col justify-center items-center h-screen`}>
            <div css={tw`pb-16`}>
              <div css={tw`text-base font-extrabold text-gray-300`}>HI THERE 👋 I'M</div>
              <div css={tw`md:text-8xl text-7xl font-black tracking-tighter`}>
                <div css={tw`md:-mb-4 -mb-2`}>Michael</div>
                <div css={tw``}>Ilie</div>
              </div>
            </div>
          </div>
        </div>

        <div css={tw`absolute bottom-0 left-0 right-0`}>
          <div css={tw`container mx-auto`}>
            <div
              css={tw`bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg h-64 rounded-t-3xl pointer-events-auto p-10 mx-4 md:mx-0 flex items-center`}
            >
              <div css={tw`flex flex-col md:flex-row max-w-lg mx-auto space-y-4 md:space-x-4 md:space-y-0`}>
                <div css={tw``}>
                  <div
                    css={tw`rounded-full overflow-hidden width[50px] height[50px] md:width[100px] md:height[100px] `}
                  >
                    <Image src="/images/michael.jpg" width={100} height={100} alt='Picture of Michael Ilie'/>
                  </div>
                </div>
                <div css={tw``}>
                  <div css={tw`text-sm md:text-base text-gray-300`}>
                    <p css={tw`mb-2`}>
                      I am a technical <Bold>Entrepreneur</Bold>. I make software, tinker with <Bold>hardware</Bold>, and put these two things together to create something <Bold>meaningful</Bold> and useful. I work at <Bold>startups</Bold>, do <Bold>research</Bold>, and play DCS Flight Sim on the side. 
                    </p>
                    <p>Currently, I'm at <Bold><Link href='https://www.careplots.com/'>Careplots...</Link></Bold>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main css={tw`relative z-20`}>
        <div css={tw`bg-black min-h-screen`}>
          <div css={tw`container mx-auto pt-20 relative`}>
            <div css={tw`absolute top[120px] left-0 right-0 z-0`}>
              <div
                css={tw`w-full max-w-sm h-20 mx-auto filter blur-3xl`}
                style={{
                  animation: `10s ease-in-out 0s infinite normal both running pulse`,
                  background: `linear-gradient(91.83deg, rgb(208, 60, 74) 2.26%, rgb(172, 74, 218) 95.81%)`
                }}
              ></div>
            </div>
            <div css={tw`flex flex-wrap max-w-lg justify-center space-x-4 mx-auto py-8 relative z-10`}>
              <Link href="https://github.com/Mcilie">
                <Chip>Github</Chip>
              </Link>
              <Link href="https://mci.sh/michael_resume.pdf">
                <Chip>Resume</Chip>
              </Link>
              <Link href="https://www.linkedin.com/in/michael-ilie-8535b9123/">
                <Chip>LinkedIn</Chip>
              </Link>
              <Link href="mailto:mcilie@icloud.com">
                <Chip>Email</Chip>
              </Link>
            </div>

            <div css={tw`text-center mt-20 mb-12 text-3xl md:text-5xl font-black`}>Projects / Experience</div>

            <div css={tw`grid px-4 md:grid-cols-2 md:px-0 gap-6 pb-20`}>
            <Link href="https://www.careplots.com/">
                <Card>
                  <CTitle>Careplots | Chief AI Officer</CTitle>
                  <CDesc>
                  Spearheading LLM solution prototypes for Government research
                  </CDesc>
                  <div css={tw`flex mt-4`}>
                  <CTag css={tw`text-green-400`}>Current</CTag>
                  <CTag>Startup</CTag>
                  </div>
                </Card>
              </Link>
            <Link href="https://pssg.cs.umd.edu/">
                <Card>
                  <CTitle>PSSG | Undergraduate Research</CTitle>
                  <CDesc>
                    Teaching LLMs to translate entire HPC codebases across programming models.
                  </CDesc>
                  <div css={tw`flex mt-4`}>
                  <CTag css={tw`text-green-400`}>Current</CTag>
                  <CTag css={tw`text-purple-500`}>Research</CTag>
                  </div>
                </Card>
              </Link>
              <Link href="https://trigaten.github.io/Prompt_Survey_Site/">
                <Card>
                  <CTitle>Systematic Survey of Prompt Engineering | Publication</CTitle>
                  <CDesc>
                    Surveying the field of prompt engineering and map out emergin innovations in how we utilize language models.
                  </CDesc>
                  <div css={tw`flex mt-4`}>
                  <CTag css={tw`text-purple-500`}>Research</CTag>
                  </div>
                </Card>
              </Link>
              <Link href="https://startupshell.org/">
                <Card>
                  <CTitle>Startup Shell | Cohort Fall '23</CTitle>
                  <CDesc>
                    Collaborating with UMD's Finest Entrepreneurs
                  </CDesc>
                  <div css={tw`flex mt-4`}>
                  <CTag css={tw`text-green-400`}>Current</CTag>
                  <CTag>School Club</CTag>
                  </div>
                </Card>
              </Link>
            <Link href="https://lumoscan.com">
                <Card>
                  <CTitle>Lumo Imaging | Senior R&D Engineer</CTitle>
                  <CDesc>
                    Using AI and Computer Vision to make full body dermoscopy affordable and accessible to all.
                  </CDesc>
                  <div css={tw`flex mt-4`}>
                    <CTag>Startup</CTag>
                    <CTag css={tw`text-yellow-600`}>STTR Funded</CTag>
                  </div>
                </Card>
              </Link>
            <Link href="https://cisionvision.com">
                <Card>
                  <CTitle>Cision Vision | Embedded Engineer</CTitle>
                  <CDesc>
                    Conducted R&D on medical imaging systems, conducted market research, hired key contractors, and project managed team.
                  </CDesc>
                  <div css={tw`flex mt-4`}>
                    <CTag>Startup</CTag>
                    <CTag css={tw`text-yellow-600`}>SBIR Funded</CTag>
                  </div>
                </Card>
              </Link>
              <Link href="https://www.blair3sat.com/">
                <Card>
                  <CTitle>blair3sat | Optical lead</CTitle>
                  <CDesc>
                    Led optical simulations to develop a small satellite that measures electron density in the ionosphere.
                  </CDesc>
                  <div css={tw`flex mt-4`}>
                    <CTag>School Club</CTag>
                  </div>
                </Card>
              </Link>
              <Link href="http://www.medapptic.com/">
                <Card>
                  <CTitle>MedApptic | Lead Software Engineer</CTitle>
                  <CDesc>
                    Worked to build an electronic drug dispenser system that integrates with existing digital infrastructure.
                  </CDesc>
                  <div css={tw`flex mt-4`}>
                    <CTag>Startup</CTag>
                    <CTag css={tw`text-yellow-600`}>SBIR Funded</CTag>
                  </div>
                </Card>
              </Link>
              <Link href="https://www.psyonic.io/">
                <Card>
                  <CTitle>Psyonic | Mechatronics Intern</CTitle>
                  <CDesc>
                  Helped develop advanced prostheses that are affordable for everyone worldwide.
                  </CDesc>
                  <div css={tw`flex mt-4`}>
                    <CTag>Startup</CTag>
                    <CTag css={tw`text-yellow-600`}>SBIR Funded</CTag>
                  </div>
                </Card>
              </Link>
              <Link href="https://github.com/Mcilie?tab=repositories">
                <Card>
                  <div css={tw`flex justify-center items-center h-full`}>
                    <CTitle>More Works →</CTitle>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
        <div css={tw``}></div>
      </main>

      <footer css={tw`h-20 relative z-20 flex justify-center items-center bg-gray-800 text-gray-300`}>
        {`© 2021-${new Date().getFullYear()} `} Michael Ilie
      </footer>
      <style jsx>
        {`
          @keyframes pulse {
            0% {
              transform: rotate(0deg);
              filter: blur(8px);
              border-radius: 5px;
            }

            33% {
              transform: rotate(-0.5deg) translate(1px, -1px) scale(1.01);
              filter: blur(10px);
              border-radius: 3px;
            }
            67% {
              transform: rotate(1deg) translate(-1px, -1px) scale(0.99);
              filter: blur(14px);
              border-radius: 7px;
            }
            100% {
              transform: rotate(0deg);
              filter: blur(8px);
              border-radius: 5px;
            }
          }
        `}
      </style>
    </div>
  );
};

const Bold = tw.span`font-bold text-white`;
const Card = tw.div`min-height[150px] bg-gray-900 rounded-lg p-6 cursor-pointer`;
const CTitle = tw.div`font-semibold mb-1`;
const CDesc = tw.div`text-gray-300 text-sm md:text-base`;
const CTag = tw.div`bg-black px-3 py-1 text-xs font-semibold rounded-md text-gray-300`;
const Chip = tw.div`px-6 py-2 bg-black font-semibold rounded-lg mb-4 hover:text-gray-400 cursor-pointer`;

export default Home;
