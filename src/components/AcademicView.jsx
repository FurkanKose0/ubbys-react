import React from 'react';
import { academicPeriods } from '../data';

const AcademicView = () => {
    const renderTable = (data, periodId) => (
        <tbody id={periodId}>
            {data.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <tr>
                            <td rowSpan="2" style={{ verticalAlign: 'middle' }}>
                                <div className="ml15">
                                    <i className="fas fa-search" style={{ color: '#3b82f6', fontSize: '10px', marginRight: '5px' }}></i>
                                    <a href="#" className="course-id-link">{item.code}</a>
                                </div>
                            </td>
                            <td rowSpan="2" style={{ verticalAlign: 'middle' }}>{item.name}</td>
                            <td rowSpan="2" style={{ verticalAlign: 'middle' }}>{item.credit}</td>
                            <td rowSpan="2" style={{ verticalAlign: 'middle' }}>{item.akts}</td>
                            <td rowSpan="2" style={{ verticalAlign: 'middle' }}>{item.coordinator}</td>
                            <td><span className="attendance-green">{item.attendance}</span></td>
                            <td>{item.passing}</td>
                            <td>{item.hbn}</td>
                            <td>{item.status}</td>
                            <td rowSpan="2"></td>
                        </tr>
                        <tr>
                            <td colSpan="4" style={{ padding: 0, borderTop: 0 }}>
                                {item.details && (
                                    <table className="table-condensed" style={{ width: '100%', marginBottom: 0, background: 'transparent' }}>
                                        <tbody>
                                            {item.details.alert && (
                                                <tr>
                                                    <td colSpan="2" style={{ color: '#d81b60', fontSize: '10px', padding: '4px 10px', textAlign: 'left' }}>
                                                        {item.details.alert}
                                                    </td>
                                                </tr>
                                            )}
                                            {Object.entries(item.details).map(([key, value]) => {
                                                if (key === 'alert') return null;
                                                return (
                                                    <tr key={key}>
                                                        <td className="text-right bold" style={{ width: '125px', color: '#333', textAlign: 'right', fontWeight: 'bold' }}>{key} : </td>
                                                        <td style={{ textAlign: 'left', paddingLeft: '10px' }}>{value}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                )}
                            </td>
                        </tr>
                    </React.Fragment>
                );
            })}
        </tbody>
    );

    return (
        <div id="academic-view">
            <div className="info-strip">
                24140399 - İnsan ve Toplum Bilimleri Fakültesi - Psikoloji Bölümü -
                Psikoloji - Eğitim Dönemi : 4 Derslerim / Yıl Dönem -
            </div>

            {academicPeriods.map((period) => (
                <div className="period-table-container" key={period.id}>
                    <div className="period-header">
                        <h3>{period.title}</h3>
                        <div className="inline-search">
                            <input type="text" placeholder="Derslerin İçinde Ara..." />
                        </div>
                    </div>

                    <table className="ubys-table table-bordered table-striped" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th width="10%">Ders Kodu</th>
                                <th width="14%">Ders Adı</th>
                                <th width="10%">Kredi</th>
                                <th width="10%">AKTS</th>
                                <th width="14%">Dersin Koordinatörü</th>
                                <th width="10%">Devam Durumu</th>
                                <th width="10%">Geçme Notu</th>
                                <th width="10%">HBN</th>
                                <th width="10%">Başarı Durumu</th>
                                <th width="2%"></th>
                            </tr>
                        </thead>
                        {renderTable(period.courses, period.id)}
                    </table>
                </div>
            ))}
        </div>
    );
};

export default AcademicView;
