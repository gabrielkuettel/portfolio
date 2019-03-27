import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";
import { rhythm } from "../../utils/typography";
import Typist from "../Typist/Typist";

const Avatar = ({ pathname, phrases }) => {
  return (
    <StaticQuery
      query={avatarQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: `flex`
            }}
          >
            <Link to="/">
              <Image
                fixed={
                  pathname === "/"
                    ? data.avatarImage.childImageSharp.fixed
                    : data.avatar.childImageSharp.fixed
                }
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  maxWidth: 60,
                  maxHeight: 60,
                  borderRadius: `50%`
                }}
                imgStyle={{
                  objectFit: `cover`
                }}
              />
            </Link>
            <div
              style={{
                marginTop: `12px`
              }}
            >
              <Typist pathname={pathname} phrases={phrases} />
            </div>
          </div>
        );
      }}
    />
  );
};

const avatarQuery = graphql`
  query avatarQuery {
    avatar: file(absolutePath: { regex: "/avatar.png/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    avatarImage: file(absolutePath: { regex: "/avatar.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Avatar;
