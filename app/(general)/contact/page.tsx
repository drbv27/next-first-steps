import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'contact Title',
 description: 'contact description',
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}