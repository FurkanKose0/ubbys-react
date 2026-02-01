import React from 'react';
import { transcriptData } from '../data';

const TranscriptView = () => {
    const { studentInfo, semesters } = transcriptData;

    return (
        <div id="transcript-view" className="container-fluid mt25">
            <div className="transcript-toolbar-new">

                <button className="t-btn-new">
                    <span className="icon-circle"><i className="fa fa-print"></i></span>
                    Yazdır
                </button>
                <button className="t-btn-new">
                    <span className="icon-circle"><i className="fa fa-calculator"></i></span>
                    Transkript Hesaplama
                </button>
                <button className="t-btn-new">
                    <span className="icon-circle"><i className="glyphicon glyphicon-eye-open"></i></span>
                    Tarihsel Transcript
                </button>
            </div>

            <div style={{ width: '80%', margin: '0 auto' }}>
                <div className="well well-sm" style={{ position: 'relative' }}>
                    <table cellPadding="0" cellSpacing="0" style={{ width: '100%' }}>
                        <tbody>
                            <tr>
                                <td width="100"><b>TC Kimlik No</b></td>
                                <td width="200">: {studentInfo.tcNo}</td>
                                <td width="180"><b>Fakülte</b></td>
                                <td>: {studentInfo.faculty}</td>
                            </tr>
                            <tr>
                                <td><b>Öğrenci No</b></td>
                                <td>: {studentInfo.studentNo}</td>
                                <td><b>Bölüm</b></td>
                                <td>: {studentInfo.department}</td>
                            </tr>
                            <tr>
                                <td><b>Adı</b></td>
                                <td>: {studentInfo.name}</td>
                                <td><b>Program</b></td>
                                <td>: {studentInfo.program}</td>
                            </tr>
                            <tr>
                                <td><b>Soyadı</b></td>
                                <td>: {studentInfo.surname}</td>
                                <td><b>Eğitim Düzeyi</b></td>
                                <td>: {studentInfo.educationLevel}</td>
                            </tr>
                            <tr>
                                <td><b>Kayıt Tarihi</b></td>
                                <td>: {studentInfo.registrationDate}</td>
                                <td><b>Eğitim Dili</b></td>
                                <td>: {studentInfo.language}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><b>Kayıt Şekli</b></td>
                                <td>: {studentInfo.registrationType}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="transcript-wrapper">
                    {/* We render semesters in rows of 2 to mimic the grid */}
                    <table style={{ width: '100%', marginBottom: '20px' }}>
                        <tbody>
                            <tr>
                                {[0, 1].map((idx) => {
                                    const sem = semesters[idx];
                                    return (
                                        <td key={idx} style={{ width: '50%', verticalAlign: 'top', padding: '15px' }}>
                                            <div className="course-panel">
                                                <table className="table table-bordered table-hover table-condensed table-striped f-095" style={{ marginBottom: '10px', width: '100%', fontSize: '12px' }}>
                                                    <caption className="my-caption">
                                                        <b>{sem.title}</b>
                                                    </caption>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '16%' }}>Ders Kodu</th>
                                                            <th style={{ width: '45%' }}>Ders Adı</th>
                                                            <th style={{ width: '16%', textAlign: 'center' }}>Kredi | AKTS</th>
                                                            <th style={{ textAlign: 'center' }}>HBN</th>
                                                            <th>Açıklama</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {sem.courses.map((course, cIdx) => (
                                                            <tr key={cIdx} className={course.hbn === 'DC' || course.hbn === 'FF' ? 'basarisizders' : ''}>
                                                                <td>
                                                                    {course.isMain && <i className="fa fa-angle-down mr5" style={{ marginRight: '5px' }}></i>}
                                                                    {course.isMain ? <b>{course.code}</b> : (course.isSub ? <><i style={{ marginRight: '25px' }}></i>{course.code}</> : course.code)}
                                                                </td>
                                                                <td>
                                                                    {course.isMain ? <b>{course.name}</b> : course.name}
                                                                </td>
                                                                <td align="center">{course.credit}</td>
                                                                <td align="center">
                                                                    {course.hbn}
                                                                </td>
                                                                <td title={course.icon === 'S.D.G.' ? "Seçmeli Ders Grubu" : ""}>
                                                                    {course.icon && <><i className="glyphicon glyphicon-info-sign mr5" style={{ marginRight: '5px' }}></i>{course.icon}</>}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div style={{ padding: '0 5px' }}>
                                                <table className="table table-bordered table-condensed table-striped text-center f-095" style={{ marginBottom: '10px', width: '100%', fontSize: '12px' }}>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '16%', verticalAlign: 'middle', textAlign: 'center', background: '#f1f3f5' }}></th>
                                                            <th style={{ width: '16%', verticalAlign: 'middle', textAlign: 'center', background: '#f1f3f5' }}><span>Alınan</span><br /> Kredi | AKTS</th>
                                                            <th style={{ width: '16%', verticalAlign: 'middle', textAlign: 'center', background: '#f1f3f5' }}><span>Tamamlanan</span><br /> Kredi | AKTS</th>
                                                            <th style={{ width: '16%', verticalAlign: 'middle', textAlign: 'center', background: '#f1f3f5' }}><span>Hesaplanan</span><br />Kredi</th>
                                                            <th style={{ width: '12%', verticalAlign: 'middle', textAlign: 'center', background: '#f1f3f5' }}>Puan</th>
                                                            <th style={{ width: '12%', verticalAlign: 'middle', textAlign: 'center', background: '#f1f3f5' }} title="Yarıyıl Not Ortalaması"><i className="glyphicon glyphicon-info-sign mr5"></i>YNO</th>
                                                            <th style={{ width: '12%', verticalAlign: 'middle', textAlign: 'center', background: '#f1f3f5' }} title="Genel Not Ortalaması"><i className="glyphicon glyphicon-info-sign mr5"></i>GNO</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><div className="text-right bold" style={{ textAlign: 'right', fontWeight: 'bold' }}>Yıllık :</div></td>
                                                            <td>{sem.footer.annual.taken}</td>
                                                            <td>{sem.footer.annual.completed}</td>
                                                            <td>{sem.footer.annual.calc}</td>
                                                            <td>{sem.footer.annual.points}</td>
                                                            <td>{sem.footer.annual.yno}</td>
                                                            <td>{sem.footer.annual.gno}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><div className="text-right bold" style={{ textAlign: 'right', fontWeight: 'bold' }}>Birikimli :</div></td>
                                                            <td>{sem.footer.cumulative.taken}</td>
                                                            <td>{sem.footer.cumulative.completed}</td>
                                                            <td>{sem.footer.cumulative.calc}</td>
                                                            <td>{sem.footer.cumulative.points}</td>
                                                            <td>{sem.footer.cumulative.yno}</td>
                                                            <td>{sem.footer.cumulative.gno}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                            <tr>
                                {[2, 3].map((idx) => {
                                    const sem = semesters[idx];
                                    return (
                                        <td key={idx} style={{ width: '50%', verticalAlign: 'top', padding: '15px' }}>
                                            <div className="course-panel">
                                                <table className="table table-bordered table-hover table-condensed table-striped f-095" style={{ marginBottom: '10px', width: '100%', fontSize: '12px' }}>
                                                    <caption className="my-caption">
                                                        <b>{sem.title}</b>
                                                    </caption>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '16%' }}>Ders Kodu</th>
                                                            <th style={{ width: '45%' }}>Ders Adı</th>
                                                            <th style={{ width: '16%', textAlign: 'center' }}>Kredi | AKTS</th>
                                                            <th style={{ textAlign: 'center' }}>HBN</th>
                                                            <th>Açıklama</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {sem.courses.map((course, cIdx) => (
                                                            <tr key={cIdx} className={course.hbn === 'DC' || course.hbn === 'FF' ? 'basarisizders' : ''}>
                                                                <td>
                                                                    {course.isMain && <i className="fa fa-angle-down mr5" style={{ marginRight: '5px' }}></i>}
                                                                    {course.isMain ? <b>{course.code}</b> : (course.isSub ? <><i style={{ marginRight: '25px' }}></i>{course.code}</> : course.code)}
                                                                </td>
                                                                <td>
                                                                    {course.isMain ? <b>{course.name}</b> : course.name}
                                                                </td>
                                                                <td align="center">{course.credit}</td>
                                                                <td align="center">
                                                                    {course.hbn}
                                                                </td>
                                                                <td title={course.icon === 'S.D.G.' ? "Seçmeli Ders Grubu" : ""}>
                                                                    {course.icon && <><i className="glyphicon glyphicon-info-sign mr5" style={{ marginRight: '5px' }}></i>{course.icon}</>}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div style={{ padding: '0 5px' }}>
                                                <table className="table table-bordered table-condensed table-striped text-center f-095" style={{ marginBottom: '10px', width: '100%', fontSize: '12px' }}>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '16%', verticalAlign: 'middle', textAlign: 'center', background: '#f1f3f5' }}></th>
                                                            <th style={{ width: '16%', verticalAlign: 'middle', textAlign: 'center', background: '#f1f3f5' }}><span>Alınan</span><br /> Kredi | AKTS</th>
                                                            <th style={{ width: '16%', verticalAlign: 'middle', textAlign: 'center', background: '#f1f3f5' }}><span>Tamamlanan</span><br /> Kredi | AKTS</th>
                                                            <th style={{ width: '16%', verticalAlign: 'middle', textAlign: 'center', background: '#f1f3f5' }}><span>Hesaplanan</span><br />Kredi</th>
                                                            <th style={{ width: '12%', verticalAlign: 'middle', textAlign: 'center', background: '#f1f3f5' }}>Puan</th>
                                                            <th style={{ width: '12%', verticalAlign: 'middle', textAlign: 'center', background: '#f1f3f5' }} title="Yarıyıl Not Ortalaması"><i className="glyphicon glyphicon-info-sign mr5"></i>YNO</th>
                                                            <th style={{ width: '12%', verticalAlign: 'middle', textAlign: 'center', background: '#f1f3f5' }} title="Genel Not Ortalaması"><i className="glyphicon glyphicon-info-sign mr5"></i>GNO</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><div className="text-right bold" style={{ textAlign: 'right', fontWeight: 'bold' }}>Yıllık :</div></td>
                                                            <td>{sem.footer.annual.taken}</td>
                                                            <td>{sem.footer.annual.completed}</td>
                                                            <td>{sem.footer.annual.calc}</td>
                                                            <td>{sem.footer.annual.points}</td>
                                                            <td>{sem.footer.annual.yno}</td>
                                                            <td>{sem.footer.annual.gno}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><div className="text-right bold" style={{ textAlign: 'right', fontWeight: 'bold' }}>Birikimli :</div></td>
                                                            <td>{sem.footer.cumulative.taken}</td>
                                                            <td>{sem.footer.cumulative.completed}</td>
                                                            <td>{sem.footer.cumulative.calc}</td>
                                                            <td>{sem.footer.cumulative.points}</td>
                                                            <td>{sem.footer.cumulative.yno}</td>
                                                            <td>{sem.footer.cumulative.gno}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                        </tbody>
                    </table>

                    <div className="print-message" style={{ display: 'none', width: '100%', height: '30px', lineHeight: '30px', textAlign: 'center', fontSize: '16px', fontWeight: 'bold' }}>
                        Bu belge sadece bilgi amaçlıdır resmi işlemlerde kullanılamaz.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TranscriptView;
