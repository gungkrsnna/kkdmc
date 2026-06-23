import {
  useEffect,
  useState,
} from "react";
import MainLayout from "../layouts/MainLayout";
import HeroPage from "../components/sections/HeroPage";

function AboutUs() {
  const [hero, setHero] =
    useState(null);

  const [story, setStory] =
    useState(null);

  const [statistics, setStatistics] =
    useState([]);

  const [benefits, setBenefits] =
    useState([]);

  const [whyChooseUs, setWhyChooseUs] =
    useState(null);

    const [socials, setSocials] =
  useState([]);

  const [clients, setClients] =
    useState([]);

    const [successMessage, setSuccessMessage] =
  useState("");

const [errorMessage, setErrorMessage] =
  useState("");


  useEffect(() => {

    loadHero();
    loadStory();
    loadStatistics();
    loadBenefits();
    loadWhyChooseUs();
    loadClients();
    loadSocials();

  }, []);

  const [form, setForm] =
  useState({
    fullName: "",
    email: "",
    message: "",
    website: "",
  });

const [loading, setLoading] =
  useState(false);

  const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]:
      e.target.value,
  });
};

  const loadClients =
  async () => {

    const response =
      await fetch(
        "http://localhost:3001/api/home-sections/about-clients"
      );

    const data =
      await response.json();

    setClients(data);

  };

  const loadSocials =
  async () => {

    try {

      const response =
        await fetch(
          "http://localhost:3001/api/social-media"
        );

      const data =
        await response.json();

      setSocials(
        Array.isArray(data)
          ? data
          : []
      );

    } catch (error) {

      console.error(error);

    }

  };

  const loadHero = async () => {

    const response =
      await fetch(
        "http://localhost:3001/api/home-sections/about_hero"
      );

    const data =
      await response.json();

    setHero(data);

  };

  const loadStory = async () => {

  try {

    const response =
      await fetch(
        "http://localhost:3001/api/home-sections/about_story"
      );

    const data =
      await response.json();

    setStory(data);

  } catch (error) {

    console.error(error);

  }

};

const loadStatistics = async () => {

  try {

    const response =
      await fetch(
        "http://localhost:3001/api/about/statistics"
      );

    const data =
      await response.json();

    setStatistics(data);

  } catch (error) {

    console.error(error);

  }

};

const loadBenefits = async () => {

  try {

    const response =
      await fetch(
        "http://localhost:3001/api/home-sections/benefits"
      );

    const data =
      await response.json();

    setBenefits(data);

  } catch (error) {

    console.error(error);

  }

};

const loadWhyChooseUs = async () => {

  try {

    const response =
      await fetch(
        "http://localhost:3001/api/home-sections/about_why_choose_us"
      );

    const data =
      await response.json();

    setWhyChooseUs(data);

  } catch (error) {

    console.error(error);

  }

};

const getValue =
  (platform) => {

    return socials.find(
      item =>
        item.platform ===
        platform
    )?.value || "";

  };

  if (form.website) {
  return;
}

const handleSubmit =
  async (e) => {

    e.preventDefault();

    if (form.website) {
      return;
    }

    try {

      setLoading(true);

      const response =
        await fetch(
          "http://localhost:3001/api/contact",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              full_name:
                form.fullName,
              email:
                form.email,
              message:
                form.message,
            }),
          }
        );

      const data =
        await response.json();

      setSuccessMessage(
        data.message ||
        "Your message has been sent successfully."
      );

      setErrorMessage("");

      setForm({
        fullName: "",
        email: "",
        message: "",
        website: "",
      });

    } catch (error) {

      console.error(error);

      setErrorMessage(
        "Failed to send message. Please try again."
      );

      setSuccessMessage("");

    } finally {

      setLoading(false);

    }

  };

  return (
    <MainLayout>
      {/* HERO */}
      <HeroPage
        badge={hero?.badge}
        title={hero?.title}
        description={hero?.description}
        image={hero?.image_url}
      />

      {/* OUR STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src={story?.image_url}
                alt="About Us"
                className="rounded-[32px] w-full h-[500px] object-cover"
              />
            </div>

            <div>

              <p className="text-primary font-semibold mb-3">
                {story?.badge}
              </p>

              <h2 className="text-5xl font-black mb-6">
                {story?.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                {story?.description}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {story?.content}
              </p>

            </div>

          </div>

        </div>
      </section>

            <section className="py-20 bg-soft">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {statistics.map((item) => (

  <div
    key={item.id}
    className="
      bg-white
      rounded-3xl
      p-8
      text-center
      shadow-sm
      hover:shadow-xl
      transition
    "
  >

    <h3 className="text-5xl font-black mb-3 text-primary">
      {item.value}
    </h3>

    <p className="text-gray-500 font-medium">
      {item.title}
    </p>

  </div>

))}

          </div>

        </div>

      </section>

            <section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <p className="text-primary font-semibold mb-3">
        Trusted By
      </p>

      <h2 className="text-5xl font-black mb-4">
        Organizations & Clients
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto">
        We are proud to work with companies,
        communities, schools, and organizations
        from around the world.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {clients.map((client) => (

        <div
          key={client.id}
          className="
            bg-soft
            rounded-3xl
            overflow-hidden
            hover:-translate-y-2
            transition
          "
        >

          <img
            src={client.image_url}
            alt={client.name}
            className="
              w-full
              h-56
              object-cover
            "
          />

          <div className="p-6">

            <h3 className="font-bold text-xl mb-2">
              {client.name}
            </h3>

            <p className="text-gray-500 text-sm">
              {client.description}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

            <section className="py-20 bg-soft">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-primary font-semibold mb-3">
              Contact Us
            </p>

            <h2 className="text-5xl font-black">
              Let's Plan Your Journey
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Info */}
            <div className="bg-white rounded-[32px] p-10">

              <div className="mb-8">
                <h4 className="font-bold text-xl mb-2">
                  Email
                </h4>
                <p className="text-gray-500">
                  {getValue("email")}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-xl mb-2">
                  Phone
                </h4>
                <p className="text-gray-500">
                  {getValue("phone")}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-2">
                  Location
                </h4>
                <p className="text-gray-500">
                  {getValue("location")}
                </p>
              </div>

            </div>

            {/* Form */}
            <div className="bg-white rounded-[32px] p-10">

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  className="hidden"
                />

                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full h-14 px-5 rounded-2xl border"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full h-14 px-5 rounded-2xl border"
                  required
                />

                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full p-5 rounded-2xl border"
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    bg-primary
                    text-white
                    px-8
                    py-4
                    rounded-2xl
                    font-semibold
                  "
                >
                  {loading
                    ? "Sending..."
                    : "Send Message"}
                </button>

                {successMessage && (
                  <p className="text-green-600 font-medium">
                    {successMessage}
                  </p>
                )}

                {errorMessage && (
                  <p className="text-red-600 font-medium">
                    {errorMessage}
                  </p>
                )}

              </form>

            </div>

          </div>

        </div>

      </section>
    </MainLayout>
  );
}

export default AboutUs;