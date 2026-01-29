import { useRef } from "react";
import Card from "./Card";
import Main from "./Main";
import Navbar from "./Navbar";
import Search from "./Search";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Home = ({ toggleTheme, theme }) => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div>
      <Main />
      <section style={{ display: "flex", alignItems: "center", marginTop: "50px" }}>
        <FaArrowLeft
          style={{ margin: "auto", cursor: "pointer" }}
          onClick={() => scroll(-300)}
        />
        <div
          ref={scrollRef}
          className="no-scrollbar"
          style={{
            display: "flex",
            overflowX: "scroll",
            scrollBehavior: "smooth",
            gap: "20px",
            width: "1250px",
            padding: "20px",
          }}
        >
          <Card
            subject="Mathematics"
            description="Master algebra, calculus, and geometry with step-by-step problem solving."
            gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
          />
          <Card
            subject="Science"
            description="Explore the universe, from atoms to galaxies, with interactive experiments."
            gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          />
          <Card
            subject="History"
            description="Dive into the past and uncover the events that shaped our world today."
            gradient="linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
          />
          <Card
            subject="Languages"
            description="Learn new languages and connect with people from around the globe."
            gradient="linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
          />
          <Card
            subject="Computer Science"
            description="Code your future with lessons in Python, Java, and web development."
            gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
          />
          <Card
            subject="Art & Design"
            description="Unleash your creativity with tutorials on sketching, painting, and digital art."
            gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
          />
          <Card
            subject="Geography"
            description="Travel the world virtually and learn about different cultures and landscapes."
            gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
          />
          <Card
            subject="Literature"
            description="Analyze classic novels and improve your reading and writing skills."
            gradient="linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)" // Light gradient, might need text color adjustment if reused, but keeping consistent structure for now
          />
        </div>
        <FaArrowRight
          style={{ margin: "auto", cursor: "pointer" }}
          onClick={() => scroll(300)}
        />
      </section>
      <Search/>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro similique consectetur quod labore, quos mollitia atque quis libero? Libero eum quaerat voluptatibus maiores magnam esse dolorum consequuntur eos cupiditate a.</p>
      {/*
      <Search />
      <TrustedBy />
      <Video />
      <SecondMain />
      <AISection />
      <TeamConnectSection />
      <Footer /> */}
    </div>
  );
};

export default Home;
