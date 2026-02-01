import React, { useState } from 'react';

const Sidebar = ({ setView }) => {
    return (
        <aside className="ubys-sidebar">
            <div className="sidebar-content">
                <div className="sidebar-header-item">

                    <span className="menu-text">menü</span>
                </div>

                <div className="sidebar-item">
                    <div className="item-icon"><i className="fas fa-home"></i></div>
                    <div className="item-text">Öğrenci Giriş Ekranı</div>
                </div>
                <div className="sidebar-item active" onClick={() => setView && setView('academic')} style={{ cursor: 'pointer' }}>
                    <div className="item-icon"><i className="fas fa-book"></i></div>
                    <div className="item-text">Derslerim</div>
                </div>
                <div className="sidebar-item">
                    <div className="item-icon"><i className="fas fa-calendar-alt"></i></div>
                    <div className="item-text">Takvim</div>
                </div>
                <div className="sidebar-item">
                    <div className="item-icon"><i className="fas fa-laptop"></i></div>
                    <div className="item-text">Canlı Derslerim</div>
                </div>
                <div className="sidebar-item">
                    <div className="item-icon"><i className="fas fa-superscript"></i></div>
                    <div className="item-text">Sınavlarım</div>
                </div>
                <div className="sidebar-item">
                    <div className="item-icon"><i className="fas fa-sync"></i></div>
                    <div className="item-text">Ders Seçimi - Kayıt Yenileme</div>
                </div>
                <div className="sidebar-item">
                    <div className="item-icon"><i className="fas fa-certificate"></i></div>
                    <div className="item-text">Mezun İletişim Sistemine Giriş</div>
                </div>
                <div className="sidebar-item">
                    <div className="item-icon"><i className="fas fa-share-alt"></i></div>
                    <div className="item-text">Erasmus Başvurusu</div>
                </div>
                <div className="sidebar-item">
                    <div className="item-icon"><i className="fas fa-share-alt"></i></div>
                    <div className="item-text">ÇAP/YANDAL Başvurusu</div>
                </div>

                <div className="vertical-label-container">
                    <div className="vertical-label">İşlemlerim</div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
