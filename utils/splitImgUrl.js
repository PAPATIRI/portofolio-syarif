export default function splitImgUrl(data) {
  return data.split("/uploads/").join("https://blog.zanccode.site/uploads/");
}
