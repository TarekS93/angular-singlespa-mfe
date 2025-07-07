@echo off
echo ===================================
echo Installazione di tutte le dipendenze
echo ===================================

echo.
echo [1/3] Installazione dipendenze root-config...
pushd root-config
call npm install
if %errorlevel% neq 0 (
    echo [ERRORE] Installazione root-config fallita!
    popd
    exit /b %errorlevel%
)
popd

echo.
echo [2/3] Installazione dipendenze navbar...
pushd navbar
call npm install
if %errorlevel% neq 0 (
    echo [ERRORE] Installazione navbar fallita!
    popd
    exit /b %errorlevel%
)
popd

echo.
echo [3/3] Installazione dipendenze dashboard...
pushd dashboard
call npm install
if %errorlevel% neq 0 (
    echo [ERRORE] Installazione dashboard fallita!
    popd
    exit /b %errorlevel%
)
popd

echo.
echo ===================================
echo Installazione completata con successo!
echo ===================================
echo.
echo Per avviare l'applicazione:
echo 1. Terminal 1: start-root.bat    (Avvia il componente principale)
echo 2. Terminal 2: start-navbar.bat  (Avvia la barra di navigazione)
echo 3. Terminal 3: start-dashboard.bat (Avvia il dashboard)
echo.
echo NOTA: Devi aprire 3 terminali separati, uno per ogni script
echo.
echo Poi visita: http://localhost:9000
echo ===================================

pause
