import React, { FC } from "react";
import "./About.css";
import AI from "../../assets/AI.jpg";
interface AboutProps {}

const About: FC<AboutProps> = () => (
  <section id="About">
    <h1 className="skillDescription">
      As your biggest fan, let me do my job : hyping you up
    </h1>
    <div className="skillBars">
      <div className="skillBar">
        <div className="skillBarText">
          <p>
            I don’t mention anyone on the night of laylatoul Qadr except my
            family and for the first time, another person, you. Allah hears
            what’s in my heart too, I talk to him about you, in laugh. And he
            listens to everything, even the words I can’t speak. He knows how
            beautiful you are Allahouma Bareek, your eyes, your smile, and your
            whole face are just unbelievably beautiful. Actually I can spend
            days to talk about it because there are enough words for it. But
            that is nothing compared to your inside. You have a wonderful
            character, a wonderful and strong imaan, trying to be a better
            person each day. I accepted you as an amaanah, due to how I feel
            blessed with your presence. In some way I feel like Allah sent you
            to me in order to make me grow emotionally, and to make me
            understand human’s feelings in depth. Al Hamdoulilah through you I’m
            becoming a real man by learning how to handle and take care of
            people’s emotions. And I finally think that I can put a stop to this
            searching, because, of all women on this earth, i restrained my mind
            on you, and made it focus just on you, at a point that currently I
            can be distracted by no one anymore. So I will make sure to become
            the best man I can be. And to do that, I trust my intention towards
            you, to look after you with great love, attention and affection. I
            won’t be always on top, I will make mistakes, but like I said as
            long as I can transform those mistakes in a way that can fit with
            you, I’ll be satisfied. And If my intentions are pure, Allah will
            allow me to hold your heart and take care of it in the best ways,
            and keep holding it even if it’s heavy sometimes, even if I’m at my
            lowest, or at my happiest. He will allow me to be your bestfriend,
            husband and protector, And he will reunites us in the best way
            possible. Amiin
          </p>
        </div>
      </div>
    </div>
    <div className="skillBars">
      <div className="skillBar">
        <div className="skillBarText">
          <p>
            I think you recognize the text above. That night everything seemed
            clear as crystal to me, what you represent for me, how I see myself
            in the future, that night you joined the list of my duas, next to
            the one for my ambitions. These duas & ambitions for which I pray to
            Allah every day, and for which I am sure he hears and answers me.
            Once again, Happy Valentine's Day, Fatima.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
