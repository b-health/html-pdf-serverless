import chromium from '@sparticuz/chromium'
import puppeteer from 'puppeteer-core'

export const generatePdfBuffer = async (
  base64Html: string,
): Promise<Buffer | undefined> => {
  let result = undefined
  let browser = null
  try {
    console.log('Launching browser')
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    })
    
    console.log('Browser launched')
    // Decode the base64 HTML string
    const html = Buffer.from(base64Html, 'base64').toString('utf-8')
    console.log("Response: ", html)

    const page = await browser.newPage()

    await page.setContent(html, {
      waitUntil: ['domcontentloaded', 'networkidle0', 'load'],
    })

    await page.evaluate('window.scrollTo(0, document.body.scrollHeight)')

    result = await page.pdf({ format: 'a4', printBackground: true })
  } catch (e) {
    console.log('Chromium error', { e })
  } finally {
    if (browser !== null) {
      await browser.close()
    }
  }
  return result
}