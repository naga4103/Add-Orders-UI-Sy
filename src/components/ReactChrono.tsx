import { Timeline } from "flowbite-react";
import { AiFillCheckCircle } from "react-icons/ai";

const data = [
  {
    title: "Step 1",
    content: "Order Details",
  },

  {
    title: "Step 2",
    content: "Customer Details",
  },

  {
    title: "Step 3",
    content: "Pickup Details",
  },
  {
    title: "Step 4",
    content: "Add Enquiry",
  },
  {
    title: "Step 5",
    content: "Submit Feedback",
  },
];

const ReactChrono = () => (
  <div>
    <Timeline>
      {data.map((each) => {
        return (
          <Timeline.Item>
            <Timeline.Point icon={AiFillCheckCircle} className="w-[50px]" />
            <Timeline.Content>
              <p className="font-normal text-[12px] text-[#170A38]">
                {each.title}
              </p>

              <h1 className="font-semibold text-[12px] text-[#170A38]">
                {each.content}
              </h1>
            </Timeline.Content>
          </Timeline.Item>
        );
      })}
    </Timeline>
  </div>
);

export default ReactChrono;
