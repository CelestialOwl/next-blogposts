import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/user.jpg"
          alt="An image showing user"
          width={300}
          height={300}
          style={{ height: '100%' }}
        />
      </div>
      <h1>Hi, I'm Max</h1>
      <p>I blog about games - especially league of legends</p>
    </section>
  );
};

export default Hero;
