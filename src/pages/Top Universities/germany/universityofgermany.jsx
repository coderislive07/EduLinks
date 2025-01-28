import React from "react";
import { useParams } from "react-router-dom";
import data from "./universitydata.js";

const FeeCard = ({ img, p1, p2 }) => {
  return (
    <div className="my-5">
      <img src={img} className="h-auto w-auto my-3" />
      <h2 className="text-center text-xl font-semibold">{p1}</h2>
      <h2 className="text-center text-xl font-semibold my-3">{p2}</h2>
    </div>
  );
};

function Universityofgermany() {
  const { id } = useParams();
  const fetchedData = data[id];
  console.log(fetchedData)
  return (
    <div className="pt-[80px]">
      <h2 className="text-xl text-center underline text-[#37D7D9] font-normal">
        {fetchedData.country}
      </h2>
      <h1 className="text-center text-5xl my-4 text-bold font-normal">
        {fetchedData.university}
      </h1>
      <img src={fetchedData.heroImg} className="h-auto w-auto my-3" />
      <div className="my-8">
        <h1 className="text-3xl text-center text-[#37D7D9] font-normal">
          Overview
        </h1>
        <p className="w-[80%] mx-auto mt-4 text-wrap text-lg font-normal">
          {fetchedData.overview}
        </p>
      </div>
      <div className="my-8">
        <h1 className="text-3xl text-center text-[#37D7D9] font-normal">
          Fees
        </h1>
        <p className="w-[80%] mx-auto mt-4 text-wrap text-lg font-normal">
          {fetchedData.fees.tagline}
        </p>
        <div className="mt-3 w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fetchedData.fees.uniFeeCard.map((fee, index) => {
            return <FeeCard p1={fee.branch} p2={fee.fees} img={fee.img} />;
          })}
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-3xl text-center text-[#37D7D9] font-normal">
          Ranking
        </h1>
        <p className="w-[80%] mx-auto mt-4 font-normal text-wrap text-lg">
          {fetchedData.ranking}
        </p>
      </div>
      <div className="my-8">
        <h1 className="text-3xl text-center text-[#37D7D9] font-normal">
          {fetchedData.university} World Ranking
        </h1>
        <table className="w-[80%] mx-auto border-2 border-collapse border-black">
          <tbody>
            {fetchedData.worldRanking.map((item, index) => (
              <tr key={index}>
                <td className="py-2 border-b border-black font-normal">
                  {item.key}
                </td>
                <td className="py-2 border-b border-black font-normal">
                  {item.answer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-8">
        <h1 className="text-3xl text-center text-[#37D7D9] font-normal">
          Subject-Wise Ranking
        </h1>
        <ul className="w-[60%] mx-auto">
          {fetchedData.subjectRanking.map((subject, index) => (
            <li key={index} className="font-normal">
              {subject}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-8">
        <h1 className="text-3xl text-center text-[#37D7D9] font-normal">
          Employability Ranking
        </h1>
        <p className="w-[60%] mx-auto mt-4 font-normal text-wrap text-lg">
          {fetchedData.employmentRanking}
        </p>
      </div>
      <div className="my-8">
        <h1 className="text-3xl text-center text-[#37D7D9] font-normal">
          Admission
        </h1>
        <p className="w-[80%] mx-auto mt-4 font-normal text-wrap text-lg">
          {fetchedData.admission}
        </p>
      </div>
      <div className="my-8">
        <h1 className="text-3xl text-center text-[#37D7D9] font-normal">
          Admission Eligibility Criteria
        </h1>
        <p className="text-center font-normal">{fetchedData.eligibility.tag}</p>
        <ul className="w-[60%] list-disc mx-auto my-4">
          {fetchedData.eligibility.req.map((req, index) => {
            return (
              <li key={index} className="my-2 font-normal">
                {req}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-8">
        <h1 className="text-3xl text-center text-[#37D7D9] font-normal">
          Document Required
        </h1>
        <p className="text-center font-normal">{fetchedData.documents.tag}</p>
        <ul className="w-[60%] list-disc mx-auto my-4">
          {fetchedData.documents.req.map((req, index) => {
            return (
              <li key={index} className="my-2 font-normal">
                {req}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-8">
        <h1 className="text-3xl text-center text-[#37D7D9] font-normal">
          Test Required
        </h1>
        <p className="w-[80%] mx-auto mt-4 text-wrap text-lg font-normal">
          {fetchedData.test}
        </p>
      </div>
      <div className="my-8">
        <h1 className="text-3xl text-center text-[#37D7D9] font-normal">
          How the University Evaluates Applicants
        </h1>
        <p className="w-[80%] mx-auto mt-4 text-wrap text-lg font-normal">
          {fetchedData.evaluation}
        </p>
      </div>
      <div className="my-8">
        <h1 className="text-3xl text-center text-[#37D7D9] font-normal">
          Tips
        </h1>
        <ul className="list-disc w-[70%] mx-auto">
          {fetchedData.tips.map((tip, index) => {
            return (
              <li key={index} className="font-normal">
                {tip}
              </li>
            );
          })}
        </ul>
      </div>
   
    </div>
  );
}

export default Universityofgermany;
