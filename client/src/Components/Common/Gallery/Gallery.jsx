import { React, useState } from 'react'
import { GalleryData } from '../../../utils/data'
import './Gallery.css'
import { Tabs } from 'antd';
import { TabsData } from '../../../utils/data';
import { Button, Modal } from 'antd';
import { motion } from "framer-motion"

const Gallery = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defimg, setDefImg] = useState();
  const [catedata, setCatedata] = useState('')

  const selectcate = (data) => {
    setCatedata(data)
    console.log(catedata, 'cate');
  }

  const showModal = (img) => {
    setIsModalOpen(true);
    setDefImg(img)
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  var data = GalleryData.filter((item) => {
    if (catedata === 'all') {
      return item
    }
    else {
      return catedata != '' ? item.category === catedata : item
    }
  })

  console.log(data, 'd');

  const GridGallery = data.map((data, index) => {
    const { id, img } = data

    return (
      <>
        <motion.div layout >
          <div  className="pics" onClick={() => showModal(img)} >
            <div className="pics-overlay"></div>
            <div className="pics-plus">
              +
            </div>
            <img src={img} alt="" style={{ width: '100%' }} />
            <div className="pics-label">Pic of the year</div>
            <div className="pics-cate">
              Fashion
            </div>
          </div>
        </motion.div>

      </>
    )
  })

  return (

    <>

      {/* start model */}

      <Modal

        visible={isModalOpen}
        onCancel={handleCancel}
        closable={false} // Hide the default close icon
        centered // Center the modal vertically in the viewport
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        header={null}
        width={1000}

      >
        <div className="modal-content" style={{ backgroundImage: `url(${defimg})` }} >
        </div>
      </Modal>

      {/* end model */}

      <div className='d-flex justify-content-center align-item-center' style={{ marginTop: '29px' }} >
        <h2><b>{`Our Work GALLERY`}</b></h2>
      </div>

      <div className="tabs">

        <Tabs
          defaultActiveKey="1"
          centered
          className="custom-tabs" // Add a class for styling
          onTabClick={(activeKey) => {
            const selectedTab = TabsData[parseInt(activeKey) - 1];
            selectcate(selectedTab.name);
          }}
        >
          {TabsData.map((tab, index) => (
            <Tabs.TabPane
              key={index + 1}
              tab={tab.name}
            >
              {/* Your tab content */}
            </Tabs.TabPane>
          ))}
        </Tabs>

      </div>

      <div className="container-gallery" style={{ marginBottom: '29px' }} >
        <div className="row">
          <div className="gallery">
            {
              GridGallery
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Gallery