@echo off
title Memoria Flash 
color 03
@echo ----------------------------------------------
@echo ---- REPARACION DE FICHEROS MEMORIA FLASH ----
@echo ----------------------------------------------
@echo mientras esperas:Dame Follow en Twitter"@Sr___Wolf"
@echo ----------------------------------------------
@echo Cambiando Atributo de Carpetas
Attrib /d /s -r -h -s *.* 
@echo ----------------------------------------------
@echo Eliminado Accesos Directos
if exist *.lnk del *.lnk 
@echo ----------------------------------------------
@echo Eliminado Autorun
if exist autorun.inf del autorun.inf 
@echo ----------------------------------------------
@echo Operacion OK...
@echo ----------------------------------------------
@echo ----------------------------------------------
@echo Por Memo!   
@echo ----------------------------------------------
@echo ----------------------------------------------
@echo Saludos... 
pause