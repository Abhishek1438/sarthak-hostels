export interface Testimonial {
  id: string
  name: string
  rating: 1 | 2 | 3 | 4 | 5
  review: string
  courseOrYear: string
  avatar: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Arjun Sharma",
    rating: 5,
    review:
      "Living at Sarthak Boys Hostel has been one of the best decisions I made during my university years. The management is incredibly supportive, the food is genuinely good, and the WiFi never lets you down during those late-night study sessions. I feel completely safe here.",
    courseOrYear: "B.Tech, 2nd Year — Manipal University Jaipur",
    avatar: "AS",
  },
  {
    id: "2",
    name: "Rahul Verma",
    rating: 5,
    review:
      "I was nervous about staying away from home for the first time, but the warm community at Sarthak made the transition seamless. The rooms are clean, the food is home-like, and the staff genuinely cares about residents. Highly recommended for any MUJ student.",
    courseOrYear: "BCA, 1st Year — Manipal University Jaipur",
    avatar: "RV",
  },
  {
    id: "3",
    name: "Karan Mehta",
    rating: 4,
    review:
      "Great value for the price. The rooms are spacious for the cost, the location can't be beaten, and the power backup means you never lose study time. The common area is my favourite spot to unwind after classes. Would definitely recommend to friends.",
    courseOrYear: "MBA, 1st Year — Manipal University Jaipur",
    avatar: "KM",
  },
  {
    id: "4",
    name: "Prateek Gupta",
    rating: 5,
    review:
      "Three years at Sarthak and I wouldn't trade the experience. The study environment is genuinely conducive to learning — quiet floors at night, fast internet, and fellow residents who take their academics seriously. The security is top-notch and I always feel safe.",
    courseOrYear: "B.Tech, 3rd Year — Manipal University Jaipur",
    avatar: "PG",
  },
  {
    id: "5",
    name: "Ankit Joshi",
    rating: 5,
    review:
      "The best thing about Sarthak is how close it is to the campus and how well-maintained everything is. The housekeeping team does a stellar job, meals are served on time, and the management responds quickly to any concerns. Exactly what a student needs.",
    courseOrYear: "B.Pharm, 2nd Year — Manipal University Jaipur",
    avatar: "AJ",
  },
]
