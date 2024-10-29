import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import img1 from "@/public/images/avatar/avatar-7.jpg";
import img2 from "@/public/images/avatar/avatar-2.jpg";
import img3 from "@/public/images/avatar/avatar-3.jpg";
import img4 from "@/public/images/avatar/avatar-4.jpg";
import img5 from "@/public/images/avatar/avatar-5.jpg";
import img6 from "@/public/images/avatar/avatar-6.jpg";
import { Fragment } from "react";
const data = [
  {
    id: 1,
    name: "Isabella Garcia",
    amount: "88",
    image: img1
  },
  {
    id: 2,
    name: "Liam Davis",
    amount: "63",
    image: img2
  },
  {
    id: 3,
    name: "Sophia Gonzalez",
    amount: "61",
    image: img3
  },
  {
    id: 4,
    name: "Charlotte Rodriguez",
    amount: "58",
    image: img4
  },
  {
    id: 5,
    name: "Oliver Miller",
    amount: "94",
    image: img5
  },
  {
    id: 6,
    name: "Elijah Smith",
    amount: "87",
    image: img6
  },
  {
    id: 7,
    name: "Emma Lopez",
    amount: "63",
    image: img4
  },
  {
    id: 8,
    name: "Ava Martinez",
    amount: "88",
    image: img5
  },
  {
    id: 9,
    name: "Benjamin Jones",
    amount: "83",
    image: img6
  },
  {
    id: 10,
    name: "James Williams",
    amount: "83",
    image: img4
  },
  {
    id: 11,
    name: "Mia Johnson",
    amount: "83",
    image: img5
  },
  {
    id: 12,
    name: "Noah Brown",
    amount: "63",
    image: img6
  }
];

const Historico = () => {
  return (
    <Fragment>
      {data.map((item, index) => (
        <li
          key={`transaction-${index}`}
          className="flex justify-between items-center gap-2 py-3 px-6 hover:bg-default-50"
        >
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={item.image.src} alt="" />
              <AvatarFallback>{item.name}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-default-700">
                {" "}
                {item.name}
              </span>
            </div>
          </div>
          <span className="text-sm font-medium text-primary-500">
            {item.amount}
          </span>
        </li>
      ))}
    </Fragment>
  );
};

export default Historico;
