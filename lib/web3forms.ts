const WEB3FORMS_ACCESS_KEY = '8e3a6fdd-2745-4537-9b91-3061a86565cd'
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const RECIPIENT_EMAIL = 'jeffreysreinvestments@gmail.com'

export interface FormDataPayload {
  [key: string]: string | boolean | number
}

export async function submitFormToWeb3Forms(formData: FormDataPayload): Promise<boolean> {
  try {
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      email_to: RECIPIENT_EMAIL,
      subject: 'New Property Inquiry from Florence Home Buyers',
      ...formData,
    }

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      console.error('Web3Forms submission failed:', response.status, response.statusText)
      return false
    }

    const result = await response.json()
    console.log('Web3Forms submission successful:', result)
    return true
  } catch (error) {
    console.error('Error submitting form to Web3Forms:', error)
    return false
  }
}
