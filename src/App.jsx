import React, { useState } from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import AcademicView from './components/AcademicView';
import TranscriptView from './components/TranscriptView';

function App() {
  const [view, setView] = useState('academic'); // 'academic' or 'transcript'
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleTranscriptClick = () => {
    setView('transcript');
    setTooltipVisible(false); // Hide tooltip after selection
  };

  return (
    <div className="ubys-wrapper">


      <div className="main-layout">
        <Sidebar setView={setView} />

        <div className="content-area">
          {/* Navigation Tabs - Hidden in Transcript View */}
          {view !== 'transcript' && (
            <div className="nav-tabs">
              <div className="tab-pill" onClick={() => setView('academic')}>
                <div className="icon-circle"><i className="fas fa-graduation-cap"></i></div>
                <span>Akademik Program Seçiniz -</span>
              </div>

              <div
                className="tab-pill"
                id="transcriptTab"
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
                onClick={handleTranscriptClick}
              >
                <div className="icon-circle"><i className="fas fa-eye"></i></div>
                <span>Transkript -</span>

                {/* Tooltip */}
                {tooltipVisible && (
                  <div
                    className="transcript-tooltip"
                    style={{ display: 'block' }}
                  >
                    İnsan ve Toplum Bilimleri Fakültesi - Psikoloji Bölümü - Psikoloji (Durumu: Aktif - Detay Durumu: Aktif )
                  </div>
                )}
              </div>

              <div className="tab-pill">
                <div className="icon-circle"><i className="fas fa-ellipsis-v"></i></div>
                <span>Diğer -</span>
              </div>

              <div className="tab-actions">
                <i className="fas fa-question-circle"></i>
                <i className="fas fa-calendar-alt"></i>
                <i className="fas fa-globe"></i>
                <i className="fas fa-th"></i>
                <i className="fas fa-lock"></i>
              </div>
            </div>
          )}

          {/* Views */}
          {view === 'academic' ? <AcademicView /> : <TranscriptView />}
        </div>
      </div>

      {view !== 'transcript' && <div className="bottom-tag">Ders İşlemleri</div>}
    </div>
  );
}

export default App;
