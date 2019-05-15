/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function(doc) {
  if (doc.isBroken) {
    return "/not-found";
  }

  if (doc.type === "home") {
    return "/";
  }
  if (doc.type === "projects") {
    return "/project/" + doc.id;
  }
  if (doc.type === "experience") {
    return "/experience";
  }
  if (doc.type === "skills") {
    return "/skills";
  }
  return "/not-found";
}
