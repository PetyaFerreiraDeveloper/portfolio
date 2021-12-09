// import { GetServerSideProps, GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations';
import Head from 'next/head'


const index = ({endpoint}) => {
  console.log(endpoint);
  
  return (
    <motion.div 
      variants = {routeAnimation}
      initial = 'initial'
      animate = 'animate'
      exit = 'exit'
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <Head>
        <title>Web Developer | Portfolio</title>
      </Head>
      
      <h5 className="my-3 font-medium">I am currently pursuing a Software Engineer education from Software University with main focus on JavaScript. I have 1+ year of experience in Web Development, where I have built several small one page applications to practise newly learned programming skills. </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">
          What I am doing
        </h6>

        <motion.div
          variants={stagger}
          initial='initial'
          animate='animate'
          className="grid gap-6 lg:grid-cols-2"
        >
          {/* children's initial and animate property should be same as the parent during a stagger effect */}
          {services.map(service => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 rounded-lg lf:col-span-1 dark:bg-dark-200"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index

// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {

//   // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
//   // const data = await res.json()

//   // console.log('SERVER', data);

//   return {
//     props: {endpoint: process.env.VERCEL_URL}
//   };
// };

// export const getStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   // calculation

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services);

//   return {
//     props: {
//       services: data.services,
//     }
//   }
// }
