import type { APIRoute } from 'astro'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData()
    const customerName = formData.get('customer_name')
    const customerEmail = formData.get('customer_email')
    const customerPhone = formData.get('customer_phone')
    const expertName = formData.get('expert_name')
    
    const { data, error } = await resend.emails.send({
      from: 'Wahine Capital <no-reply@wcapital.asia>',
      to: ['hellowahine@wcapital.asia'],
      subject: `Expert Consultation! ${expertName}`,
      html: `
        <h2>New Expert Consultation Request</h2>
        <p><strong>Expert:</strong> ${expertName}</p>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Customer Email:</strong> ${customerEmail}</p>
        <p><strong>Customer Phone:</strong> ${customerPhone}</p>
        <p><strong>Booking Time:</strong> ${new Date().toLocaleString()}</p>
      `
    })

    if (error) {
      return new Response(JSON.stringify({ 
        error: 'Failed to send email' 
      }), { 
        status: 400 
      })
    }

    return new Response(JSON.stringify({ 
      message: 'Email sent successfully' 
    }), { 
      status: 200 
    })

  } catch (error) {
    return new Response(JSON.stringify({ 
      error: 'Server error' 
    }), { 
      status: 500 
    })
  }
}