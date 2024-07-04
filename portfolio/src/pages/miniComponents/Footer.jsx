import React from "react";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { date } from "zod";


const Footer = () => {
  const [user, setUser] = useState({});
  const domain = "";
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        `${domain}/api/v1/user/portfolio/me`,
        { withCredentials: true }
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);


  return (
    <footer className="p-5 mt-6 w-full max-w-[1050px] mx-auto">

      <div className="flex-col justify-center">
        <ul>
          <li>
            <Label>Aim</Label>
            <p>
              My Purpose Is To Sustainably Make the Pleasure and Benefits of
              web Accessible to the Many.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <Label>Useful Links</Label>
          </li>
          <li><Link to={user.blog}>Blog Post</Link></li>
          <li><Link>Blog Post</Link></li>
          <li><Link>Blog Post</Link></li>
          <li><Link>Blog Post</Link></li>
        </ul>
        <ul>
          <li>
            <Label>Follow Me for More Info</Label>
          </li>
          <li><Link to={user.twitter}>Twitter <i class="bi bi-twitter"></i></Link></li>
          <li><Link to={user.instagram}>intergram <i class="bi bi-instagram"></i></Link></li>
          <li><Link to={user.linkedin}>Linkadin <i class="bi bi-linkedin"></i></Link></li>
          <li><Link to={user.whatsapp}>whatsapp<i class="bi bi-whatsapp"></i></Link></li>

        </ul>
      </div>
      <hr />
      <p className="text-center mt-4">Copyright &copy; {new Date().getFullYear()}  Xbot - All right reserved || Designed by Angus </p>
    </footer>

  );
};

export default Footer;
