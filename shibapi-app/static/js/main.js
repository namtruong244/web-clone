'use strict'
import {sendListHtml} from './sendListHtml.js'
import {connectModalHtml} from './connectModalHtml.js'
import {selectNetworkHtml} from './selectNetworkHtml.js'
import {sendPageHtml} from './sendPageHtml.js'
import {poolPageHtml} from './poolPageHtml.js'
import {convertPageHtml} from './convertPageHtml.js'
import {rewardPageHtml} from './rewardPageHtml.js'
import {convertListHtml} from './convertListHtml.js'
import {convertViaListHtml} from './convertViaListHtml.js'
import {settingsModalHtml} from './settingsModalHtml.js'
import {rewardConnectedPageHtml} from './rewardConnectedPageHtml.js'
import {comingSoonModalHtml} from './comingSoonModalHtml.js'


(function () {
    const mainPage = document.querySelector('#mainPage')
    const modal = document.querySelector('#modal')
    const connectedWalletModal = document.querySelector('#connected-wallet-modal')
    const connectWalletButton = document.querySelector('#connect-wallet')
    const connectedWalletButton = document.querySelector('#connected-wallet')
    const disconnectWalletButton = document.querySelector('#disconnect-button')
    const copyAddressButton = document.querySelector('#copy-address')
    const settingButton = document.querySelector("#root- > div > div.MuiBox-root.jss10.jss1 > div.MuiBox-root.jss18 > div.Flex-sc-1vi3c76-0.gCkfoC > div > button")
    const menuWrapper = document.querySelector('#menu-')
    const childMenuWrapper = document.querySelector('#menu- > div:nth-child(1)')
    const body = document.querySelector('body')
    const mainMenu = document.querySelector('#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded')
    const navButton = document.querySelectorAll('#root- > div > div.MuiBox-root.jss10.jss1 > div.MuiBox-root.jss12 > div > div.MuiTabs-scroller.MuiTabs-scrollable > div > button')
    window.userWalletAddress = null
    let currentPage = 0

    navButton[0].addEventListener('click', function () {
        currentPage = 0
        loadSendPage()
    })

    navButton[1].addEventListener('click', function () {
        currentPage = 1
        loadPoolPage()
    })

    navButton[2].addEventListener('click', function () {
        currentPage = 2
        loadConvertPage()
    })

    navButton[3].addEventListener('click', function () {
        currentPage = 3
        loadRewardPage()
    })

    settingButton.addEventListener('click', function () {
        const rect = this.getBoundingClientRect()
        const data = {
            left: rect.left - 330,
            top: rect.top + 30
        }
        showMenu(settingsModalHtml, data)

        const button = document.querySelectorAll("#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiBox-root.jss125.jss21 > div > button.MuiButtonBase-root.MuiIconButton-root")
        const value = document.querySelector("#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiBox-root.jss125.jss21 > div > div > div > input")
        document.querySelector("#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiBox-root.jss125.jss21 > div > button.MuiButtonBase-root.MuiIconButton-root:nth-child(1)").addEventListener('click', function () {
            value.value = this.getAttribute('my-value')
            button.forEach((current) => {
                current.classList.remove('MuiIconButton-colorPrimary')
                current.classList.remove('MuiIconButton-colorSecondary')
                if (current === this) {
                    current.classList.add('MuiIconButton-colorPrimary')
                }else {
                    current.classList.add('MuiIconButton-colorSecondary')
                }
            })
        })

        document.querySelector("#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiBox-root.jss125.jss21 > div > button.MuiButtonBase-root.MuiIconButton-root:nth-child(2)").addEventListener('click', function () {
            value.value = this.getAttribute('my-value')
            button.forEach((current) => {
                current.classList.remove('MuiIconButton-colorPrimary')
                current.classList.remove('MuiIconButton-colorSecondary')
                if (current === this) {
                    current.classList.add('MuiIconButton-colorPrimary')
                }else {
                    current.classList.add('MuiIconButton-colorSecondary')
                }
            })
        })

        document.querySelector("#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > div > div.MuiBox-root.jss125.jss21 > div > button.MuiButtonBase-root.MuiIconButton-root:nth-child(3)").addEventListener('click', function () {
            value.value = this.getAttribute('my-value')
            button.forEach((current) => {
                current.classList.remove('MuiIconButton-colorPrimary')
                current.classList.remove('MuiIconButton-colorSecondary')
                if (current === this) {
                    current.classList.add('MuiIconButton-colorPrimary')
                }else {
                    current.classList.add('MuiIconButton-colorSecondary')
                }
            })
        })
    })

    function showComingSoonModal() {
        modal.style.display = 'flex'
        modal.innerHTML = comingSoonModalHtml

        document.querySelector('#go-back').addEventListener('click', function () {
            modal.style.display = 'none'
            body.style.overflow = 'auto'
        })
    }

    // Show connect wallet modal
    connectWalletButton.addEventListener('click', function () {
        modal.style.display = 'flex'
        modal.innerHTML = connectModalHtml

        // Close modal button
        document.querySelector('#modal > section > div.bn-onboard-custom.bn-onboard-modal-content-close.svelte-rntogh').addEventListener('click', function () {
            modal.style.display = 'none'
            body.style.overflow = 'auto'
        })

        // Explanation section
        document.querySelector('#list-wallet > div.bn-onboard-custom.bn-onboard-select-info-container.svelte-w9ftfy > span').addEventListener('click', function () {
            const explanation = document.querySelector('#list-wallet > p.bn-onboard-custom.bn-onboard-select-wallet-definition.svelte-w9ftfy')
            if (explanation.style.display === 'none') {
                explanation.style.display = 'block'
            } else {
                explanation.style.display = 'none'
            }
        })

        const listWallet = document.querySelector('#list-wallet')
        const metaMaskConnectButton = document.querySelector('#metamask-connect')
        if (!(window.ethereum && window.ethereum.isMetaMask)) {
            metaMaskConnectButton.addEventListener('click', function() {
                listWallet.style.display = 'none'
                document.querySelector('#install-metamask').style.display = 'block'
            })
        } else {
            metaMaskConnectButton.addEventListener('click', loginWithMetaMask)
        }

        document.querySelector("#list-wallet > ul > li:nth-child(2)").addEventListener('click', function () {
            showComingSoonModal()
        })

        document.querySelector("#list-wallet > ul > li:nth-child(3)").addEventListener('click', function () {
            showComingSoonModal()
        })

        document.querySelector("#list-wallet > ul > li:nth-child(4)").addEventListener('click', function () {
            showComingSoonModal()
        })

        body.style.overflow = 'hidden'
    })

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none'
            body.style.overflow = 'auto'
        }

        if (event.target === childMenuWrapper) {
            menuWrapper.style.display = 'none'
            body.style.overflow = 'auto'
            body.style.paddingRight = '0'
        }

        if (event.target === connectedWalletModal) {
            connectedWalletModal.style.display = 'none'
            body.style.overflow = 'auto'
        }
    }

    function showMenu(html, rect) {
        menuWrapper.style.display = 'block'
        mainMenu.innerHTML = html
        mainMenu.style.left = `${rect.left}px`
        mainMenu.style.top = `${rect.top}px`
        body.style.overflow = 'hidden'
        body.style.paddingRight = '17px'

        const selectItems = document.querySelectorAll("#menu- > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li")
        selectItems.forEach((currentValue) => {
            currentValue.addEventListener('click', function() {
                menuWrapper.style.display = 'none'
                showComingSoonModal()
            })
        })
    }

    function loadSendPage() {
        setSelectedNav(currentPage)
        mainPage.innerHTML = sendPageHtml

        const sendSelectButton = document.querySelector('#mainPage > div.Div-sc-qas6yn-0.QJHDX > div > div > div.jss40 > div > div')
        const selectNetworkButton1 = document.querySelector('#mainPage > div.Div-sc-qas6yn-0.QJHDX > div > div > div:nth-child(2) > div.MuiBox-root.jss83.jss82 > div.MuiBox-root.jss84.jss82 > div')
        const selectNetworkButton2 = document.querySelector('#mainPage > div.Div-sc-qas6yn-0.QJHDX > div > div > div:nth-child(4) > div.MuiBox-root.jss104.jss82 > div.MuiBox-root.jss105.jss82 > div')

        sendSelectButton.addEventListener('click', function () {
            const rect = this.getBoundingClientRect()
            const data = {
                left: rect.left - 10,
                top: rect.top - 10
            }
            showMenu(sendListHtml, data)
        })

        selectNetworkButton1.addEventListener('click', function () {
            const rect = this.getBoundingClientRect()
            const data = {
                left: rect.left - 1,
                top: rect.top - 20
            }
            showMenu(selectNetworkHtml, data)
        })

        selectNetworkButton2.addEventListener('click', function () {
            const rect = this.getBoundingClientRect()
            const data = {
                left: rect.left - 1,
                top: rect.top - 240
            }
            showMenu(selectNetworkHtml, data)
        })
    }

    function loadPoolPage() {
        setSelectedNav(currentPage)
        mainPage.innerHTML = poolPageHtml
    }

    function loadConvertPage() {
        setSelectedNav(currentPage)
        mainPage.innerHTML = convertPageHtml

        document.querySelector("#mainPage > div > div > div > div.MuiGrid-root.jss279 > div:nth-child(1) > div").addEventListener('click', function () {
            const rect = this.getBoundingClientRect()
            const data = {
                left: rect.left - 10,
                top: rect.top - 10
            }
            showMenu(convertListHtml, data)
        })

        document.querySelector("#mainPage > div > div > div > div.MuiGrid-root.jss279 > div:nth-child(2) > div").addEventListener('click', function () {
            const rect = this.getBoundingClientRect()
            const data = {
                left: rect.left - 10,
                top: rect.top - 10
            }
            showMenu(sendListHtml, data)
        })

        document.querySelector("#mainPage > div > div > div > div.MuiGrid-root.jss279 > div:nth-child(3) > div.MuiInputBase-root.MuiInput-root").addEventListener('click', function () {
            const rect = this.getBoundingClientRect()
            const data = {
                left: rect.left - 10,
                top: rect.top - 10
            }
            showMenu(convertViaListHtml, data)
        })
    }

    function loadRewardPage() {
        setSelectedNav(currentPage)
        let content = rewardPageHtml
        if (window.userWalletAddress !== null) {
            content = rewardConnectedPageHtml
        }
        mainPage.innerHTML = content
    }

    function setSelectedNav(indexItem) {
        navButton.forEach((currentVal, index) => {
            if (index === indexItem) {
                currentVal.classList.add('Mui-selected')
            } else {
                currentVal.classList.remove('Mui-selected')
            }
        })
    }
    
    connectedWalletButton.addEventListener('click', function() {
        connectedWalletModal.style.display = 'flex'
    })

    document.querySelector('#connected-wallet-modal .jss166').addEventListener('click', function() {
        connectedWalletModal.style.display = 'none'
        body.style.overflow = 'auto'
    })

    copyAddressButton.addEventListener('click', function() {
        // Copy the text inside the text field
        navigator.clipboard.writeText(window.userWalletAddress);
    })
    

    disconnectWalletButton.addEventListener('click', function() {
        signOutOfMetaMask()
    })

    async function loginWithMetaMask() {
        modal.style.display = 'none'
        body.style.overflow = 'auto'
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            .catch((e) => {
                console.error(e.message)
                return
            })
        if (!accounts) { return }

        window.userWalletAddress = accounts[0]
        document.querySelectorAll('.wallet-address').forEach((currentValue) => {
            currentValue.innerHTML = `${accounts[0].substring(0, 6)}...${accounts[0].substring(accounts[0].length - 4)}`
        })
        connectWalletButton.style.display = 'none'
        connectedWalletButton.style.display = 'block'

        if (currentPage === 3) {
            loadRewardPage()
        }
    }

    function signOutOfMetaMask() {
        window.userWalletAddress = null
        connectWalletButton.style.display = 'block'
        connectedWalletButton.style.display = 'none'
        connectedWalletModal.style.display = 'none'

        if (currentPage === 3) {
            loadRewardPage()
        }
    }

    window.addEventListener('DOMContentLoaded', () => {
        loadSendPage()
    });

})()
