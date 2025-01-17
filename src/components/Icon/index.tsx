import React, { memo, useMemo } from 'react'
import { ReactSVG } from 'react-svg'
import iconPathList from './iconPathList'
import { IIconProps } from './interface'
import tw from '@/utilities/tw'

const Icon = (props: IIconProps) => {
  const {
    name,
    externalUrl,
    fill,
    stroke,
    size,
    width,
    height,
    lgSize,
    lgWidth,
    lgHeight,
    mobileSize,
    mobileWidth,
    mobileHeight,
    scale,
    className,
    onClick,
    desktopContainer,
    mobileContainer,
    autoResponsive,
  } = props

  const iconSrc = useMemo(() => {
    if (name !== 'external') return iconPathList[name]
    if (externalUrl) return externalUrl
    return ''
  }, [name, externalUrl])

  const standardDesktop = autoResponsive ? 'hidden md:flex' : null
  const standardMobile = autoResponsive ? 'flex md:hidden' : null

  if (autoResponsive || (!!iconSrc && desktopContainer && mobileContainer))
    return (
      <>
        <div className={tw(standardDesktop, desktopContainer)}>
          {lgSize || (lgWidth && lgHeight) ? (
            <>
              <div className="flex lg:hidden">
                <ReactSVG
                  className={!!onClick ? 'cursor-pointer' : ''}
                  onClick={onClick}
                  beforeInjection={(svg) => {
                    if (className) svg.classList.add(className)
                    if (fill) {
                      svg.setAttribute('fill', fill)
                      for (let i = 0; i < svg.children.length; i++) {
                        const child = svg.children[i]
                        child.setAttribute('fill', fill)
                      }
                    }
                    if (stroke) {
                      svg.setAttribute('stroke', stroke)
                      for (let i = 0; i < svg.children.length; i++) {
                        const child = svg.children[i]
                        child.setAttribute('stroke', stroke)
                      }
                    }
                    if (size) svg.setAttribute('style', `width: ${size}px; height: ${size}px;`)
                    if (width && height)
                      svg.setAttribute('style', `width: ${width}px; height: ${height}px;`)
                    if (scale) svg.setAttribute('style', `scale: ${scale}`)
                  }}
                  src={iconSrc}
                  title={name}
                />
              </div>
              <div className="hidden lg:flex">
                <ReactSVG
                  className={!!onClick ? 'cursor-pointer' : ''}
                  onClick={onClick}
                  beforeInjection={(svg) => {
                    if (className) svg.classList.add(className)
                    if (fill) {
                      svg.setAttribute('fill', fill)
                      for (let i = 0; i < svg.children.length; i++) {
                        const child = svg.children[i]
                        child.setAttribute('fill', fill)
                      }
                    }
                    if (stroke) {
                      svg.setAttribute('stroke', stroke)
                      for (let i = 0; i < svg.children.length; i++) {
                        const child = svg.children[i]
                        child.setAttribute('stroke', stroke)
                      }
                    }
                    if (lgSize)
                      svg.setAttribute('style', `width: ${lgSize}px; height: ${lgSize}px;`)
                    if (lgWidth && lgHeight)
                      svg.setAttribute('style', `width: ${lgWidth}px; height: ${lgHeight}px;`)
                    if (scale) svg.setAttribute('style', `scale: ${scale}`)
                  }}
                  src={iconSrc}
                  title={name}
                />
              </div>
            </>
          ) : (
            <ReactSVG
              className={!!onClick ? 'cursor-pointer' : ''}
              onClick={onClick}
              beforeInjection={(svg) => {
                if (className) svg.classList.add(className)
                if (fill) {
                  svg.setAttribute('fill', fill)
                  for (let i = 0; i < svg.children.length; i++) {
                    const child = svg.children[i]
                    child.setAttribute('fill', fill)
                  }
                }
                if (stroke) {
                  svg.setAttribute('stroke', stroke)
                  for (let i = 0; i < svg.children.length; i++) {
                    const child = svg.children[i]
                    child.setAttribute('stroke', stroke)
                  }
                }
                if (size) svg.setAttribute('style', `width: ${size}px; height: ${size}px;`)
                if (width && height)
                  svg.setAttribute('style', `width: ${width}px; height: ${height}px;`)
                if (scale) svg.setAttribute('style', `scale: ${scale}`)
              }}
              src={iconSrc}
              title={name}
            />
          )}
        </div>
        <div className={tw(standardMobile, mobileContainer)}>
          <ReactSVG
            className={!!onClick ? 'cursor-pointer' : ''}
            onClick={onClick}
            beforeInjection={(svg) => {
              if (className) svg.classList.add(className)
              if (fill) {
                svg.setAttribute('fill', fill)
                for (let i = 0; i < svg.children.length; i++) {
                  const child = svg.children[i]
                  child.setAttribute('fill', fill)
                }
              }
              if (stroke) {
                svg.setAttribute('stroke', stroke)
                for (let i = 0; i < svg.children.length; i++) {
                  const child = svg.children[i]
                  child.setAttribute('stroke', stroke)
                }
              }
              if (mobileSize)
                svg.setAttribute('style', `width: ${mobileSize}px; height: ${mobileSize}px;`)
              if (mobileWidth && mobileHeight)
                svg.setAttribute('style', `width: ${mobileWidth}px; height: ${mobileHeight}px;`)
              if (scale) svg.setAttribute('style', `scale: ${scale}`)
            }}
            src={iconSrc}
            title={name}
          />
        </div>
      </>
    )

  if (!!iconSrc)
    return (
      <ReactSVG
        className={!!onClick ? 'cursor-pointer' : ''}
        onClick={onClick}
        beforeInjection={(svg) => {
          if (className) svg.classList.add(className)
          if (fill) {
            svg.setAttribute('fill', fill)
            for (let i = 0; i < svg.children.length; i++) {
              const child = svg.children[i]
              child.setAttribute('fill', fill)
            }
          }
          if (stroke) {
            svg.setAttribute('stroke', stroke)
            for (let i = 0; i < svg.children.length; i++) {
              const child = svg.children[i]
              child.setAttribute('stroke', stroke)
            }
          }
          if (size) svg.setAttribute('style', `width: ${size}px; height: ${size}px;`)
          if (width && height) svg.setAttribute('style', `width: ${width}px; height: ${height}px;`)
          if (scale) svg.setAttribute('style', `scale: ${scale}`)
        }}
        src={iconSrc}
        title={name}
      />
    )

  return null
}

export default memo(Icon)
