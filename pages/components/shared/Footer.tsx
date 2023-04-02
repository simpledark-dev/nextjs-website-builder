import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800  py-12">
      <div
        suppressHydrationWarning
        className="max-w-screen-lg mx-auto px-4 md:px-8"
      >
        <div
          suppressHydrationWarning
          className="flex flex-wrap flex-row gap-8 pl-16"
        >
          <div
            suppressHydrationWarning
            className="w-[calc(50%-2rem)] md:w-[calc(25%-2rem)]"
          >
            <ul>
              <li className="mb-2">
                <svg
                  width="90"
                  height="37"
                  viewBox="0 0 147 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8295 27.5114C11.1364 27.5114 8.81818 26.9659 6.875 25.875C4.94318 24.7727 3.45455 23.2159 2.40909 21.2045C1.36364 19.1818 0.840909 16.7898 0.840909 14.0284C0.840909 11.3352 1.36364 8.97159 2.40909 6.9375C3.45455 4.90341 4.92614 3.31818 6.82386 2.18182C8.73295 1.04545 10.9716 0.477273 13.5398 0.477273C15.267 0.477273 16.875 0.755682 18.3636 1.3125C19.8636 1.85795 21.1705 2.68182 22.2841 3.78409C23.4091 4.88636 24.2841 6.27273 24.9091 7.94318C25.5341 9.60227 25.8466 11.5455 25.8466 13.7727V15.767H3.73864V11.267H19.0114C19.0114 10.2216 18.7841 9.29545 18.3295 8.48864C17.875 7.68182 17.2443 7.05114 16.4375 6.59659C15.642 6.13068 14.7159 5.89773 13.6591 5.89773C12.5568 5.89773 11.5795 6.15341 10.7273 6.66477C9.88636 7.16477 9.22727 7.84091 8.75 8.69318C8.27273 9.53409 8.02841 10.4716 8.01705 11.5057V15.7841C8.01705 17.0795 8.25568 18.1989 8.73295 19.142C9.22159 20.0852 9.90909 20.8125 10.7955 21.3239C11.6818 21.8352 12.733 22.0909 13.9489 22.0909C14.7557 22.0909 15.4943 21.9773 16.1648 21.75C16.8352 21.5227 17.4091 21.1818 17.8864 20.7273C18.3636 20.2727 18.7273 19.7159 18.9773 19.0568L25.6932 19.5C25.3523 21.1136 24.6534 22.5227 23.5966 23.7273C22.5511 24.9205 21.1989 25.8523 19.5398 26.5227C17.892 27.1818 15.9886 27.5114 13.8295 27.5114ZM47.8864 36.8182V22.8068H47.6648C47.3239 23.5341 46.8409 24.2557 46.2159 24.9716C45.6023 25.6761 44.8011 26.2614 43.8125 26.7273C42.8352 27.1932 41.642 27.4261 40.233 27.4261C38.2443 27.4261 36.4432 26.9148 34.8295 25.892C33.2273 24.858 31.9545 23.3409 31.0114 21.3409C30.0795 19.3295 29.6136 16.8636 29.6136 13.9432C29.6136 10.9432 30.0966 8.44886 31.0625 6.46023C32.0284 4.46023 33.3125 2.96591 34.9148 1.97727C36.5284 0.977273 38.2955 0.477273 40.2159 0.477273C41.6818 0.477273 42.9034 0.727273 43.8807 1.22727C44.8693 1.71591 45.6648 2.32955 46.267 3.06818C46.8807 3.79545 47.3466 4.51136 47.6648 5.21591H47.9716V0.818181H55.1307V36.8182H47.8864ZM42.5341 21.6477C43.7045 21.6477 44.6932 21.3295 45.5 20.6932C46.3182 20.0455 46.9432 19.142 47.375 17.983C47.8182 16.8239 48.0398 15.4659 48.0398 13.9091C48.0398 12.3523 47.8239 11 47.392 9.85227C46.9602 8.70454 46.3352 7.81818 45.517 7.19318C44.6989 6.56818 43.7045 6.25568 42.5341 6.25568C41.3409 6.25568 40.3352 6.57954 39.517 7.22727C38.6989 7.875 38.0795 8.77273 37.6591 9.92045C37.2386 11.0682 37.0284 12.3977 37.0284 13.9091C37.0284 15.4318 37.2386 16.7784 37.6591 17.9489C38.0909 19.108 38.7102 20.017 39.517 20.6761C40.3352 21.3239 41.3409 21.6477 42.5341 21.6477ZM67.9062 21.4261V13.9091H71.5369V27H68.0511V24.6222H67.9148C67.6193 25.3892 67.1278 26.0057 66.4403 26.4716C65.7585 26.9375 64.9261 27.1705 63.9432 27.1705C63.0682 27.1705 62.2983 26.9716 61.6335 26.5739C60.9688 26.1761 60.4489 25.6108 60.0739 24.8778C59.7045 24.1449 59.517 23.267 59.5114 22.2443V13.9091H63.142V21.5966C63.1477 22.3693 63.3551 22.9801 63.7642 23.429C64.1733 23.8778 64.7216 24.1023 65.4091 24.1023C65.8466 24.1023 66.2557 24.0028 66.6364 23.804C67.017 23.5994 67.3239 23.2983 67.5568 22.9006C67.7955 22.5028 67.9119 22.0114 67.9062 21.4261ZM78.174 27.2472C77.3388 27.2472 76.5945 27.1023 75.9411 26.8125C75.2876 26.517 74.7706 26.0824 74.3899 25.5085C74.0149 24.929 73.8274 24.2074 73.8274 23.3438C73.8274 22.6165 73.9609 22.0057 74.228 21.5114C74.495 21.017 74.8587 20.6193 75.3189 20.3182C75.7791 20.017 76.3018 19.7898 76.8871 19.6364C77.478 19.483 78.0973 19.375 78.745 19.3125C79.5064 19.233 80.12 19.1591 80.5859 19.0909C81.0518 19.017 81.3899 18.9091 81.6001 18.767C81.8104 18.625 81.9155 18.4148 81.9155 18.1364V18.0852C81.9155 17.5455 81.745 17.1278 81.4041 16.8324C81.0689 16.5369 80.5916 16.3892 79.9723 16.3892C79.3189 16.3892 78.799 16.5341 78.4126 16.8239C78.0263 17.108 77.7706 17.4659 77.6456 17.8977L74.2876 17.625C74.4581 16.8295 74.7933 16.142 75.2933 15.5625C75.7933 14.9773 76.4382 14.5284 77.228 14.2159C78.0234 13.8977 78.9439 13.7386 79.9893 13.7386C80.7166 13.7386 81.4126 13.8239 82.0774 13.9943C82.7479 14.1648 83.3416 14.429 83.8587 14.7869C84.3814 15.1449 84.7933 15.6051 85.0945 16.1676C85.3956 16.7244 85.5462 17.392 85.5462 18.1705V27H82.103V25.1847H82.0007C81.7905 25.5938 81.5092 25.9545 81.157 26.267C80.8047 26.5739 80.3814 26.8153 79.8871 26.9915C79.3928 27.1619 78.8217 27.2472 78.174 27.2472ZM79.2138 24.7415C79.7479 24.7415 80.2195 24.6364 80.6286 24.4261C81.0376 24.2102 81.3587 23.9205 81.5916 23.5568C81.8246 23.1932 81.9411 22.7812 81.9411 22.321V20.9318C81.8274 21.0057 81.6712 21.0739 81.4723 21.1364C81.2791 21.1932 81.0604 21.2472 80.8161 21.2983C80.5717 21.3437 80.3274 21.3864 80.0831 21.4261C79.8388 21.4602 79.6172 21.4915 79.4183 21.5199C78.9922 21.5824 78.62 21.6818 78.3018 21.8182C77.9837 21.9545 77.7365 22.1392 77.5604 22.3722C77.3842 22.5994 77.2962 22.8835 77.2962 23.2244C77.2962 23.7188 77.4751 24.0966 77.8331 24.358C78.1967 24.6136 78.657 24.7415 79.2138 24.7415ZM91.9936 19.4318V27H88.3629V13.9091H91.8232V16.2188H91.9766C92.2663 15.4574 92.7521 14.8551 93.4339 14.4119C94.1158 13.9631 94.9425 13.7386 95.9141 13.7386C96.8232 13.7386 97.6158 13.9375 98.2919 14.3352C98.968 14.733 99.4936 15.3011 99.8686 16.0398C100.244 16.7727 100.431 17.6477 100.431 18.6648V27H96.8004V19.3125C96.8061 18.5114 96.6016 17.8864 96.1868 17.4375C95.772 16.983 95.201 16.7557 94.4737 16.7557C93.9851 16.7557 93.5533 16.8608 93.1783 17.071C92.8089 17.2812 92.5192 17.5881 92.3089 17.9915C92.1044 18.3892 91.9993 18.8693 91.9936 19.4318ZM110.256 13.9091V16.6364H102.372V13.9091H110.256ZM104.162 10.7727H107.793V22.9773C107.793 23.3125 107.844 23.5739 107.946 23.7614C108.048 23.9432 108.19 24.071 108.372 24.1449C108.56 24.2187 108.776 24.2557 109.02 24.2557C109.19 24.2557 109.361 24.2415 109.531 24.2131C109.702 24.179 109.832 24.1534 109.923 24.1364L110.494 26.8381C110.313 26.8949 110.057 26.9602 109.727 27.0341C109.398 27.1136 108.997 27.1619 108.526 27.179C107.651 27.2131 106.884 27.0966 106.224 26.8295C105.571 26.5625 105.063 26.1477 104.699 25.5852C104.335 25.0227 104.156 24.3125 104.162 23.4545V10.7727ZM121.016 21.4261V13.9091H124.646V27H121.161V24.6222H121.024C120.729 25.3892 120.237 26.0057 119.55 26.4716C118.868 26.9375 118.036 27.1705 117.053 27.1705C116.178 27.1705 115.408 26.9716 114.743 26.5739C114.078 26.1761 113.558 25.6108 113.183 24.8778C112.814 24.1449 112.626 23.267 112.621 22.2443V13.9091H116.251V21.5966C116.257 22.3693 116.464 22.9801 116.874 23.429C117.283 23.8778 117.831 24.1023 118.518 24.1023C118.956 24.1023 119.365 24.0028 119.746 23.804C120.126 23.5994 120.433 23.2983 120.666 22.9006C120.905 22.5028 121.021 22.0114 121.016 21.4261ZM127.55 27V13.9091H131.011V16.2188H131.164C131.437 15.4517 131.891 14.8466 132.528 14.4034C133.164 13.9602 133.925 13.7386 134.812 13.7386C135.71 13.7386 136.474 13.9631 137.104 14.4119C137.735 14.8551 138.156 15.4574 138.366 16.2188H138.502C138.769 15.4688 139.252 14.8693 139.951 14.4205C140.656 13.9659 141.488 13.7386 142.448 13.7386C143.67 13.7386 144.661 14.1278 145.423 14.9062C146.19 15.679 146.573 16.7756 146.573 18.196V27H142.951V18.9119C142.951 18.1847 142.758 17.6392 142.371 17.2756C141.985 16.9119 141.502 16.7301 140.923 16.7301C140.263 16.7301 139.749 16.9403 139.38 17.3608C139.011 17.7756 138.826 18.3239 138.826 19.0057V27H135.306V18.8352C135.306 18.1932 135.121 17.6818 134.752 17.3011C134.388 16.9205 133.908 16.7301 133.312 16.7301C132.908 16.7301 132.545 16.8324 132.221 17.0369C131.903 17.2358 131.65 17.517 131.462 17.8807C131.275 18.2386 131.181 18.6591 131.181 19.142V27H127.55Z"
                    fill="#73ffff80"
                  />
                </svg>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Montreal, Canada
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Ho Chi Minh, Vietnam
                </Link>
              </li>
            </ul>
          </div>
          <div
            suppressHydrationWarning
            className="w-[calc(50%-2rem)] md:w-[calc(25%-2rem)]"
          >
            <ul>
              <li className="mb-2">
                <h3
                  suppressHydrationWarning
                  className="text-white font-semibold mb-4"
                >
                  Company
                </h3>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Our Team
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div
            suppressHydrationWarning
            className="w-[calc(50%-2rem)] md:w-[calc(25%-2rem)]"
          >
            <ul>
              <li className="mb-2">
                <h3
                  suppressHydrationWarning
                  className="text-white font-semibold mb-4"
                >
                  Product
                </h3>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div
            suppressHydrationWarning
            className="w-[calc(50%-2rem)] md:w-[calc(25%-2rem)]"
          >
            <ul>
              <li className="mb-2">
                <h3
                  suppressHydrationWarning
                  className="text-white font-semibold mb-4"
                >
                  Connect
                </h3>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div suppressHydrationWarning className="flex justify-center mt-8">
          <div suppressHydrationWarning className="text-sm text-gray-400">
            © 2023 eQuantum. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer