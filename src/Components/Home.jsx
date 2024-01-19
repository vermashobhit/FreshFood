import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function Home() {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Carousel with indicators outside --> */}
      <div className="glide-05 relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="https://img.freepik.com/premium-psd/vegetable-grocery-delivery-promotion-web-banner-facebook-cover-instagram-template_502896-109.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704758400&semt=ais"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://img.freepik.com/free-psd/healthy-food-banner-template-concept_23-2148555635.jpg?w=1060&t=st=1704914434~exp=1704915034~hmac=d6578db93747507a2e012473cb2ac66bf925a18975c38ca4ea48019ef5fee81b"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://img.freepik.com/premium-psd/fresh-vegetable-banner-template_88281-5245.jpg?w=1060"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/healthy-vegetables-banner-design-template-21a9d6f7102f16ddd973d540d30bbe83_screen.jpg?ts=1664872225"
                className="m-auto max-h-400 w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=612x612&w=0&k=20&c=SEyObHsbBsrd1XZlgEg389VT86BMFKZKfKReKyVPAk4="
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          
        </div>
      </div>
      {/*<!-- End Carousel with indicators outside --> */}
    </>
  )
}