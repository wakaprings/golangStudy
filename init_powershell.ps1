# powershell -File C:\golang\init_powershell.ps1

# go初期設定モジュール
go get github.com/gorilla/mux

go get github.com/mdempsky/gocode
go get github.com/uudashr/gopkgs/v2/cmd/gopkgs
go get github.com/ramya-rao-a/go-outline
go get github.com/acroca/go-symbols
go get golang.org/x/tools/cmd/guru
go get golang.org/x/tools/cmd/gorename
go get github.com/cweill/gotests/...
go get github.com/fatih/gomodifytags
go get github.com/josharian/impl
go get github.com/davidrjenni/reftools/cmd/fillstruct
go get github.com/haya14busa/goplay/cmd/goplay
go get github.com/godoctor/godoctor
go get github.com/go-delve/delve/cmd/dlv
go get github.com/stamblerre/gocode
go get github.com/rogpeppe/godef
go get golang.org/x/tools/cmd/goimports
go get golang.org/x/lint/golint

# gccインストール用
choco get mingw
