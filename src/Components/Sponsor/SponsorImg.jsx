/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const SponsorImg = ({data}) => {
    const { ServiceID, sponsor } = data || {};
    return (
        <div className="ml-[50px] mb-10">
            <img className="w-[200px] h-[100px] rounded-2xl" src={sponsor} alt="" />
        </div>
    );
};

export default SponsorImg;