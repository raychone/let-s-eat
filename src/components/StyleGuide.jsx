// @ts-nocheck
/* eslint-disable react/no-unescaped-entities */
"use client";
// imports for calendar
import { format } from "date-fns";
import { cn } from "./lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

// imports for select
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StyleGuide = () => {
  const [date, setDate] = React.useState();

  return (
    <>
      {/* typography */}
      <div className="flex flex-col gap-y-4 p-24">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta libero
          pariatur quidem perferendis alias qui distinctio voluptate dolor,
          doloribus consequatur enim quo vel aliquid iste officia cumque
          eligendi sequi aspernatur!
        </p>
      </div>
      <div className="bg-black/70 p-24 flex flex-col gap-y-4">
        <NavLink to="/">Link</NavLink>
        {/* buttons */}
        <Button variant="default">Let's eat</Button>
        <Button variant="orange">Let's eat</Button>
        <Button variant="input">Let's eat</Button>
        <Button
          variant="orange"
          size="sm"
        >
          Let's eat
        </Button>
        {/* label and imput */}
        <div className="">
          <Label htmlFor="fistname">First Name</Label>
          <Input
            type="firstname"
            id="firstname"
          />
        </div>
        <div className="">
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            type="lastname"
            id="lastname"
          />
        </div>
        {/* calendar */}
        <div>
          <Label>date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"input"}
                className={cn("w-full justify-start text-left font-normal")}
              >
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        {/* select */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default StyleGuide;
