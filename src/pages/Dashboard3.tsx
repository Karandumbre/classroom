import { FunctionComponent } from "react";
import styles from "./Dashboard3.module.css";
const Dashboard3: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.search}>
            <img className={styles.searchIcon} alt="" src="/search1.svg" />
          </div>
          <div className={styles.action}>
            <div className={styles.avatar}>
              <div className={styles.background}>
                <div className={styles.background1} />
                <div className={styles.overlay} />
              </div>
              <img className={styles.avatarIcon} alt="" src="/avatar9@2x.png" />
            </div>
            <img className={styles.searchIcon} alt="" src="/moonstars3.svg" />
            <img
              className={styles.searchIcon}
              alt=""
              src="/layoutgridadd3.svg"
            />
            <div className={styles.notification}>
              <img className={styles.bellIcon} alt="" src="/bell3.svg" />
              <div className={styles.dot}>
                <div className={styles.background2} />
                <div className={styles.div}>4</div>
              </div>
            </div>
            <div className={styles.avatar1}>
              <div className={styles.avatar2}>
                <div className={styles.background}>
                  <div className={styles.background4} />
                  <div className={styles.overlay} />
                </div>
                <div className={styles.background} />
              </div>
              <div className={styles.status} />
            </div>
          </div>
        </div>
        <div className={styles.containerChild} />
        <div className={styles.minimalStepperStepsParent}>
          <div className={styles.minimalStepperSteps}>
            <div className={styles.atomsMinimalStepperStep}>
              <div className={styles.progress} />
              <div className={styles.iconText}>
                <img className={styles.icon} alt="" src="/icon6.svg" />
                <div className={styles.text}>Step Name</div>
              </div>
            </div>
            <div className={styles.atomsMinimalStepperStep1}>
              <div className={styles.progressBg} />
              <div className={styles.iconText1}>
                <img className={styles.icon} alt="" src="/icon7.svg" />
                <div className={styles.text}>Step Name</div>
              </div>
            </div>
            <div className={styles.atomsMinimalStepperStep2}>
              <div className={styles.progressBar} />
              <div className={styles.iconText1}>
                <img className={styles.icon} alt="" src="/icon8.svg" />
                <div className={styles.text}>Step Name</div>
              </div>
            </div>
            <div className={styles.atomsMinimalStepperStep2}>
              <div className={styles.progressBar} />
              <div className={styles.iconText1}>
                <img className={styles.icon} alt="" src="/icon8.svg" />
                <div className={styles.text}>Step Name</div>
              </div>
            </div>
          </div>
          <div className={styles.textWrapper}>
            <b className={styles.text4}>Upload photo of classroom</b>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.text5}>
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsumLorem ipsumLorem ipsum
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.uploadParent}>
              <img className={styles.uploadIcon} alt="" src="/upload.svg" />
              <div className={styles.dragDropContainer}>
                <p
                  className={styles.dragDrop}
                >{`Drag & drop or choose file to upload `}</p>
                <p className={styles.dragDrop}>PDF or JPG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <div className={styles.logo1} />
          <b className={styles.logo2}>Logo</b>
          <img
            className={styles.indentDecreaseIcon}
            alt=""
            src="/indentdecrease.svg"
          />
        </div>
        <div className={styles.section}>
          <div className={styles.mainMenu}>MAIN MENU</div>
        </div>
        <div className={styles.appsPages}>
          <div className={styles.list}>
            <img
              className={styles.smartHomeIcon}
              alt=""
              src="/smarthome3.svg"
            />
            <div className={styles.overview}>Overview</div>
            <div className={styles.badge}>
              <div className={styles.div1}>3</div>
            </div>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/chevrondown.svg"
            />
          </div>
          <div className={styles.list1}>
            <img
              className={styles.smartHomeIcon}
              alt=""
              src="/usercircle3.svg"
            />
            <div className={styles.manageAttendance}>Manage attendance</div>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className={styles.list1}>
            <img className={styles.smartHomeIcon} alt="" src="/filetext3.svg" />
            <div className={styles.manageAttendance}>Classes list</div>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className={styles.list1}>
            <img className={styles.smartHomeIcon} alt="" src="/filetext3.svg" />
            <div className={styles.manageAttendance}>Student list</div>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard3;
