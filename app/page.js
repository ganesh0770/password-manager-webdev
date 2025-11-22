"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const pass_ref = useRef();


  const [form, setForm] = useState({
    domain: "",
    userid: "",
    password: "",
  });

  const [list, setList] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("passwords");
    if (saved) setList(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("passwords", JSON.stringify(list));
  }, [list]);

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const save_password = () => {
    if (!form.domain || !form.userid || !form.password) {
      toast.error("All fields are required!");
      return;
    }

    const updated = [...list, form];
    setList(updated);

    setForm({ domain: "", userid: "", password: "" });

    toast.success("Password Saved!");
  };

  const copy_text = (value) => {
    navigator.clipboard.writeText(value);
    toast.success("Copied!");
  };

  const toggle_password = () => {
    if (pass_ref.current.type === "password") {
      pass_ref.current.type = "text";
    } 
    else {
      pass_ref.current.type = "password";
      
    }
  };

  const delete_item = (index) => {
    const updated = list.filter((_, i) => i !== index);
    setList(updated);
    toast.success("Deleted!");
  };


  const edit_option = (index, item) => {

    let dom = item.domain
    let userid = item.userid
    let pass = item.password

    document.getElementById("domain_id").value = dom;
    document.getElementById("userid_id").value = userid;
    document.getElementById("password_id").value = pass;

    let updated = list.filter((_, i) => i !== index);
    setList(updated[0].list);

    // console.log(updated)
    toast.success("Update now!");
    



  };

  return (
    <>
     

      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="flex flex-col gap-4 p-10">

        <div className="mx-auto max-w-7xl">
          <h1 className="text-green-100 text-3xl text-center font-bold">
            Password Manager
          </h1>

          <div className="text-white flex flex-col gap-4 w-full items-center mt-6 ">
            <input
              id="domain_id"
              className="inputs w-full bg-white text-black rounded-full px-4 py-2"
              placeholder="Enter Domain Name"
              name="domain"
              value={form.domain}
              onChange={handlechange}
            />

            <div className="flex gap-3 w-full relative">
              <input
                id="userid_id"
                className="inputs w-full bg-white text-black rounded-full px-4 py-2"
                placeholder="Enter ID / Email"
                name="userid"
                value={form.userid}
                onChange={handlechange}
              />

              <input
                id="password_id"
                ref={pass_ref}
                className="inputs w-full bg-white text-black rounded-full px-4 py-2"
                placeholder="Enter Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handlechange}
              />

              <svg                             onClick={toggle_password} className="absolute invert right-2 top-3.5  cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="23" height="30" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.13 13.13 0 0 1 1.66-2.043C4.12 4.669 5.88 3.5 8 3.5c2.12 0 3.879 1.17 5.227 2.468a13.13 13.13 0 0 1 1.66 2.043c.907 1.378 1.047 2.065 1.047 2.065s-.139.686-.1.686a13.13 13.13 0 0 1-1.66-2.043C11.879 11.5 10.12 12.5 8 12.5c-2.12 0-3.879-1.17-5.227-2.468a13.13 13.13 0 0 1-1.66-2.043c-.101-.151-.139-.185-.153-.21H1.173zM8 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
</svg>


           
            </div>

            <button
              onClick={save_password}
              className="bg-green-500 w-40 rounded-full px-4 py-2 text-black font-semibold hover:bg-green-300"
            >
              Add Password
            </button>
          </div>
        </div>

        {/* Saved Passwords */}

        <div className="text-white m-6 mx-auto flex flex-col gap-6 max-w-4xl overflow-x-auto ">
          <h2 className="text-center font-bold text-2xl">Saved Passwords</h2>

          {list.length === 0 && (
            <div className="text-center font-bold text-xl">No Passwords Saved</div>
          )}

          {list.length > 0 && (
            <table className="table-auto w-full  bg-black/30 backdrop-blur-lg rounded-lg p-4">
              <thead className="bg-amber-900 text-center ">
                <tr>
                  <th className="py-2 w-1/4 text-lg">Domain</th>
                  <th className="py-2 w-1/4 text-lg">User ID</th>
                  <th className="py-2 w-1/4 text-lg">Password</th>
                  <th className="py-2 w-1/6 text-lg">Actions</th>
                </tr>
              </thead>

              <tbody>
                {list.map((item, i) => (
                  <tr key={i} className="border-b border-gray-700">
                    <td className="py-2 text-center">
                      <div className="flex justify-center items-center gap-2">
                        <a href={item.domain} target="_blank" className="truncate max-w-[120px]">
                          {item.domain}
                        </a>
                        <svg onClick={() => copy_text(item.domain)} className="cursor-pointer" viewBox="0 0 24 24" fill="currentColor" width="80px" height="24px"><path d="M0 0h24v24H0z" fill="none" /><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg>

                      </div>
                    </td>

                    <td className="py-2 text-center">
                      <div className="flex justify-center items-center gap-2">
                        <span>{item.userid}</span>
                        <svg onClick={() => copy_text(item.userid)}
                          className="cursor-pointer" viewBox="0 0 24 24" fill="currentColor" width="80px" height="24px"><path d="M0 0h24v24H0z" fill="none" /><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg>

                      </div>
                    </td>

                    <td className="py-2 text-center">
                      <div className="flex justify-center items-center gap-2">
                        <span>{item.password}</span>


                        <svg onClick={() => copy_text(item.password)}
                          className="cursor-pointer" viewBox="0 0 24 24" fill="currentColor" width="80px" height="24px"><path d="M0 0h24v24H0z" fill="none" /><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg>
                      </div>
                    </td>

                    <td className="py-2 text-center">
                      <div className="flex justify-center items-center gap-3">


                        <svg onClick={() => delete_item(i)} className="invert cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" viewBox="0 0 64 64">
                          <path d="M 28 11 C 26.895 11 26 11.895 26 13 L 26 14 L 13 14 C 11.896 14 11 14.896 11 16 C 11 17.104 11.896 18 13 18 L 14.160156 18 L 16.701172 48.498047 C 16.957172 51.583047 19.585641 54 22.681641 54 L 41.318359 54 C 44.414359 54 47.041828 51.583047 47.298828 48.498047 L 49.839844 18 L 51 18 C 52.104 18 53 17.104 53 16 C 53 14.896 52.104 14 51 14 L 38 14 L 38 13 C 38 11.895 37.105 11 36 11 L 28 11 z M 18.173828 18 L 45.828125 18 L 43.3125 48.166016 C 43.2265 49.194016 42.352313 50 41.320312 50 L 22.681641 50 C 21.648641 50 20.7725 49.194016 20.6875 48.166016 L 18.173828 18 z"></path>
                        </svg>


                        <svg onClick={() => edit_option(i, item)}
                          className="cursor-pointer " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>






                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className='bg-gray-300 mycontainer h-18 text-black fixed bottom-0 text-2xl text-center p-1 oblique flex  justify-center '>
        
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="70t" viewBox="0 0 50 50">
<path d="M23.375 5.052c-2.46.259-4.823 1.956-6.751 3.356-.747.542-1.452 1.055-2.109 1.449C11.808 11.481 7.675 11.5 7.5 11.5c-.551 0-1 .448-1 1v8.875c0 .011.018.767.247 2h16.628V5.052zM23.191 42.544c.059.027.122.04.184.061v-17.23H7.223c.317 1.095.772 2.354 1.428 3.702C10.569 33.024 14.65 38.563 23.191 42.544zM39.35 29.077c.655-1.348 1.111-2.607 1.428-3.702H25.375v16.89C33.523 38.307 37.474 32.934 39.35 29.077zM41.5 12.5c0-.552-.449-1-1-1-.175 0-4.308-.019-7.015-1.643-.657-.395-1.363-.907-2.109-1.449-1.731-1.257-3.813-2.752-6.001-3.235v18.202h15.878c.229-1.236.247-1.995.247-2.011V12.5z"></path>
</svg>
        <span className='flex flex-col  ' >

          <h3>

            Protecting your digital life, one password at a time
          </h3>
          <h3>
            All &copy; reserved
          </h3>
        </span>



      </div>
    </>
  );
}
