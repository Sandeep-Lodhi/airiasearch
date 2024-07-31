import React from 'react'
import HighlyScalableImg from '../../assets/WorriedAbout/HighlyScalableImg.svg'
import DiveDeeperImg from '../../assets/WorriedAbout/DiveDeeperImg.svg'
import AccessControlsImg from '../../assets/WorriedAbout/AccessControlsImg.svg'
function WorriedaboutCardDown() {
  return (
    <>
       <div className="flex flex-col md:flex-row justify-center items-center gap-10  container mx-auto px-4">
      {/* Card 1  py-10*/}
      <div className="bg-card-gradient border border-card-border rounded-2xl p-6 flex flex-col justify-between h-72 hover:bg-card-gradient-hover transition-all">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white text-left">Highly Scalable</h2>
          <p className="text-white text-left">Optmised to perform with your growing needs for tomorrow</p>
        </div>
        <img src={HighlyScalableImg} alt="Highly Scalable Img" className="ms-auto w-46 h-40 object-contain rounded-2xl" />
      </div>

      {/* Card 2 */}
      <div className="bg-card-gradient border border-card-border rounded-2xl p-6 flex flex-col justify-between h-72 hover:bg-card-gradient-hover transition-all">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white text-left">Dive Deeper</h2>
          <p className="text-white text-left">Fusce lorem ligula, volutpat sit amet ex in, tincidunt sagittis ex. Cras nisi orci, </p>
        </div>
        <img src={DiveDeeperImg} alt="DiveDeeperImg" className="ms-auto w-46 h-40 object-contain rounded-2xl" />
      </div>

      {/* Card 3 */}
      <div className="bg-card-gradient border border-card-border rounded-2xl p-6 flex flex-col justify-between h-72 hover:bg-card-gradient-hover transition-all">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white text-left">Access Controls</h2>
          <p className="text-white text-left">Fusce lorem ligula, volutpat sit amet ex in, tincidunt sagittis ex. Cras nisi orci, </p>
        </div>
        <img src={AccessControlsImg} alt="Access Controls Img" className="ms-auto w-46 h-40 object-contain rounded-2xl" />
      </div>
    </div>
    </>
  )
}

export default WorriedaboutCardDown