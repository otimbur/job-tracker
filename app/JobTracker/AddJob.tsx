"use client";
import { use, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface FormProps {
  jobDescription: {
    position: string;
    company: string;
    description: string;
  };
}

export default function AddJob({ jobDescription }: FormProps) {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [isDesabled, setIsDesabled] = useState(false);
  const queryClient = useQueryClient();

  //create an object that represents the data
  const data = {
    position,
    company,
    description,
  };
  //Add a new job
  const { mutate } = useMutation(
    async (data: string) => await axios.post("/api/posts/addJob", { data }),
    {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data) => {
        console.log(data);
        setIsDesabled(false);
        setPosition(" ");
        setCompany(" ");
        setDescription(" ");
      },
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDesabled(true);
    mutate(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="p-4 bg-green-200 rounded-lg">
        <h2 className="text-xl flex justify-center font-bold mb-6  text-green-900">
          Add Job
        </h2>
        <div className="mb-4">
          <label
            className="block font-semibold text-green-900 mb-2"
            htmlFor="position"
          >
            Position
          </label>
          <input
            className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            id="position"
            name="position"
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-semibold text-green-900"
            htmlFor="company"
          >
            Company
          </label>
          <input
            className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            id="company"
            name="company"
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-semibold text-green-900 mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            name="description"
          />
        </div>
        <div className="flex flex-row-reverse ">
          <button
            type="submit"
            disabled={isDesabled}
            className="bg-white  hover:bg-green-400 text-green-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}
