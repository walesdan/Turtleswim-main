import { ICard } from "components/Card";

export const featuredHouse: ICard[] = [
  {
    image:
      "/images/rectangle.png",
    type: "HOUSE",
    status: "Popular",
    name: "Mini (Baby) 4-35 Months",
    price: "Lessons for the littlest fish",
    owner: {
      avatar:
        "",
      name: "Coach Wales",
      address: "Cantonments, Accra",
    },
  },

  
  
  
  
  
 
];

interface ITestimonial {
  image: string;
  title: string;
  description: string;
  user: {
    avatar: string;
    name: string;
    major: string;
  };
}
export const testimonials: ITestimonial[] = [
  {
    image:
      "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "My house sold out fast!",
    description:
      "I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!",
    user: {
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Courtney Henry",
      major: "CEO Andarafish",
    },
  },
  {
    image:
      "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Best! I got the house I wanted through Hounter",
    description:
      "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    user: {
      avatar:
        "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Dianne Russell",
      major: "Manager Director",
    },
  },
  {
    image:
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Through the Hounter, I can get a house for my self",
    description:
      "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
    user: {
      avatar:
        "https://images.pexels.com/photos/894077/pexels-photo-894077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Esther Howard",
      major: "Head of Marketing",
    },
  },
];

interface ITip {
  image: string;
  user: {
    avatar: string;
    name: string;
  };
  title: string;
  description: string;
  date: string;
}
export const tipsAndTricks: ITip[] = [
  {
    image:
      "https://drive.google.com/file/d/1fzhffvnfq0FTdn64vQ1xfpIhA_Cig6SO/view?usp=drive_link",
    user: {
      avatar:
        "https://images.pexels.com/photos/2118709/pexels-photo-2118709.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Dianne Russell",
    },
    title: "The things we need to check when we want to buy a house",
    description:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    date: "4 min read | 25 Apr 2021",
  },
  {
    image:
      "https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    user: {
      avatar:
        "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Courtney Henry",
    },
    title: "7 Ways to distinguish the quality of the house we want to buy",
    description:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    date: "6 min read | 24 Apr 2021",
  },
  {
    image:
      "https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    user: {
      avatar:
        "https://images.pexels.com/photos/2962146/pexels-photo-2962146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Darlene Robertson",
    },
    title: "The best way to know the quality of the house we want to buy",
    description:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    date: "2 min read | 24 Apr 2021",
  },
  {
    image:
      "https://images.pexels.com/photos/8288954/pexels-photo-8288954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    user: {
      avatar:
        "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Cameron Williamson",
    },
    title: "12 Things to know before buying a house",
    description:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    date: "8 min read | 25 Apr 2021",
  },
];
