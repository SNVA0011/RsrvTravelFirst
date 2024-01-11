import React from 'react'
import PageHead from '../component/PageHead'
import RecentSearch from '../component/RecentSearch'
import AdventureStarts from '../component/AdventureStarts/AdventureStarts'
import ExploreSearch from '../component/ExploreSearch'
import TopAirlineDeal from '../component/TopAirlineDeal'
import FlightOfferDl from '../component/FlightOfferDl'
import PopularRoutes from '../component/PopularRoutes/PopularRoutes'
import PartnerBrands from '../component/PartnerBrands/PartnerBrands'
import LatestBlogs from '../component/LatestBlogs'
import DownloadApp from '../component/DownloadApp'
import ExploreTravel from '../component/ExploreTravel'
import Image from 'next/image'
import { Hostname } from '../utils/static'


const index = () => {
  return (
    <>
      <PageHead
        title={`ReservationsDeal : Hotels, Vacations & Travel Deals`}
        description={`Book Tickets, luxury hotels tickets with best deals from your destinations & Get Best Price Guarantee @ ${Hostname}`}
        keywords={`${Hostname}, Hotels, Travel Deals`}
      />

      <ExploreTravel />

      <RecentSearch
        Title="Top / Recent Searches"
        Routes={[
          { 'from': 'New Delhi', 'to': 'Mumbai', 'date': '28 Nov 2023', 'traveller': 'A-1 C-1 I-1, Economy', 'thumbnail': 'recent-search-1.webp', }, { 'from': 'New Delhi', 'to': 'Kashmir', 'date': '28 Nov 2023', 'traveller': 'A-1 C-1 I-1, Economy', 'thumbnail': 'recent-search-2.webp', }, { 'from': 'New Delhi', 'to': 'New York', 'date': '28 Nov 2023', 'traveller': 'A-1 C-1 I-1, Economy', 'thumbnail': 'recent-search-3.webp', },
        ]}
      />

      <AdventureStarts
        Title={"The Adventure starts today!"}
        SubTitle={"We are trusted around the World!"}
        BtnTitle={"Book Now"}
      />


      <ExploreSearch
        Title="Explore Top Searches"
        Routes={[
          { 'destination': 'New York', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-1.webp', }, { 'destination': 'Germany', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-2.webp', }, { 'destination': 'Greece', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-3.webp', }, { 'destination': 'Scotland', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-4.webp', }, { 'destination': 'Greece', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-5.webp', }, { 'destination': 'Scotland', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-6.webp', }, { 'destination': 'New York', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-7.webp', }, { 'destination': 'Germany', 'date': '28 Nov 2023', 'thumbnail': 'explore-topsearch-8.webp', }
        ]}
      />

      <TopAirlineDeal
        Title="Top Airline Deals"
        ViewALLBtn={'/airlines'}  
        Routes={[
          { 'thumbnail': 'airline-blcimg-1.jpg', 'from': 'DEL', 'date': '02 Dec 2023', 'to': 'BOM', 'price': '$ 3574' }, { 'thumbnail': 'airline-blcimg-2.jpg', 'from': 'DEL', 'date': '07 Dec 2023', 'to': 'NWK', 'price': '$ 9825' }, { 'thumbnail': 'airline-blcimg-3.jpg', 'from': 'DEL', 'date': '02 Dec 2023', 'to': 'BOM', 'price': '$ 3574' }, { 'thumbnail': 'airline-blcimg-4.jpg', 'from': 'DEL', 'date': '02 Dec 2023', 'to': 'NWK', 'price': '$ 9825' }, { 'thumbnail': 'airline-blcimg-1.jpg', 'from': 'DEL', 'date': '02 Dec 2023', 'to': 'BOM', 'price': '$ 3574' }, { 'thumbnail': 'airline-blcimg-3.jpg', 'from': 'DEL', 'date': '02 Dec 2023', 'to': 'NWK', 'price': '$ 9825' }
        ]}
      />


      <FlightOfferDl
        Title="Flight Offer Deals"
        Routes={[
          { 'thumbnail': 'flgoff-1.webp', 'destination': 'Malaga to Bhutan', 'date': '20 Nov 2023 - 01 Dec 2023', 'class': 'Economy Class', 'offerapply': true, 'price': '$ 761', }, { 'thumbnail': 'flgoff-2.webp', 'destination': 'Malaga to Singapore', 'date': '20 Nov 2023 - 01 Dec 2023', 'class': 'Economy Class', 'offerapply': true, 'price': '$ 761', }, { 'thumbnail': 'flgoff-3.webp', 'destination': 'Singapore to Thailand', 'date': '20 Nov 2023 - 01 Dec 2023', 'class': 'Economy Class', 'offerapply': true, 'price': '$ 761', }
        ]}
      />


      <PopularRoutes
        Title="Popular Domestic Route" 
        Routes={[
          { 'thumbnail': 'popular-rtdom-1.webp', 'date': '02 Dec 2023 - 06 Dec 2023', 'from': 'DEL', 'to': 'BOM', 'class': 'Economy', 'price': '$ 3574', }, { 'thumbnail': 'popular-rtdom-2.webp', 'date': '02 Dec 2023 - 06 Dec 2023', 'from': 'DEL', 'to': 'IXJ', 'class': 'Economy', 'price': '$ 3574', }, { 'thumbnail': 'popular-rtdom-3.webp', 'date': '02 Dec 2023 - 06 Dec 2023', 'from': 'BOM', 'to': 'PAT', 'class': 'Economy', 'price': '$ 3574', }, { 'thumbnail': 'popular-rtdom-4.webp', 'date': '02 Dec 2023 - 06 Dec 2023', 'from': 'DEL', 'to': 'UDR', 'class': 'Economy', 'price': '$ 3574', }, { 'thumbnail': 'popular-rtdom-5.webp', 'date': '02 Dec 2023 - 06 Dec 2023', 'from': 'IXJ', 'to': 'IXD', 'class': 'Economy', 'price': '$ 3574', }, { 'thumbnail': 'popular-rtdom-6.webp', 'date': '02 Dec 2023 - 06 Dec 2023', 'from': 'UDR', 'to': 'BHJ', 'class': 'Economy', 'price': '$ 3574', },
        ]}
      />

       <PopularRoutes
        Title="Popular International Route" 
        Routes={[
          { 'thumbnail': 'popular-rtint-1.webp', 'date': '02 Dec 2023 - 06 Dec 2023', 'from': 'DEL', 'to': 'LCY', 'class': 'Economy', 'price': '$ 3574', }, { 'thumbnail': 'popular-rtint-2.webp', 'date': '02 Dec 2023 - 06 Dec 2023', 'from': 'DEL', 'to': 'NYC', 'class': 'Economy', 'price': '$ 3574', }, { 'thumbnail': 'popular-rtint-3.webp', 'date': '02 Dec 2023 - 06 Dec 2023', 'from': 'BOM', 'to': 'PAR', 'class': 'Economy', 'price': '$ 3574', }, { 'thumbnail': 'popular-rtint-4.webp', 'date': '02 Dec 2023 - 06 Dec 2023', 'from': 'DEL', 'to': 'MAD', 'class': 'Economy', 'price': '$ 3574', }, { 'thumbnail': 'popular-rtint-5.webp', 'date': '02 Dec 2023 - 06 Dec 2023', 'from': 'IXJ', 'to': 'SIN', 'class': 'Economy', 'price': '$ 3574', }, { 'thumbnail': 'popular-rtint-6.webp', 'date': '02 Dec 2023 - 06 Dec 2023', 'from': 'UDR', 'to': 'GPA', 'class': 'Economy', 'price': '$ 3574', },
        ]}
        SecondTab={true}
      />


      <DownloadApp
        Title={'Download Travomint App Now!'}
        SubTitle={<>Use code <span>TRAVOMINT</span> and get <span>FLAT 15%</span> off* on your first domestic flight booking</>}
        AppTitle={<>Experience a fresh way to manage <span>flight booking!</span></>}
        PlayStoreUrl="https://play.google.com/store/search?q="
        AppleStoreUrl="https://apps.apple.com/in/app/"
      />


      <LatestBlogs
        Title="Blogs"
        ViewALLBtn={'/blog'} 
        BlogsItems={[
          { 'thumbnail': 'blog-src-1.webp', 'date': '12 Dec 2023', 'title': 'How can I download my flight ticket from the PNR number?', 'url': 'test' }, { 'thumbnail': 'blog-src-2.webp', 'date': '12 Dec 2023', 'title': 'How can I download my flight ticket from the PNR number?', 'url': 'test' }, { 'thumbnail': 'blog-src-3.webp', 'date': '12 Dec 2023', 'title': 'How can I download my flight ticket from the PNR number?', 'url': 'test' }, { 'thumbnail': 'blog-src-4.webp', 'date': '12 Dec 2023', 'title': 'How can I download my flight ticket from the PNR number?', 'url': 'test' }
        ]}
      />

      <PartnerBrands BrandsImage={[
        'sabre-brand.webp', 'iata-brand.webp', 'sabre-brand.webp', 'iata-brand.webp', 'sabre-brand.webp', 'iata-brand.webp', 'sabre-brand.webp', 'iata-brand.webp',
      ]} />


    </>
  )
}

export default index